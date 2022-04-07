import {
  AccountInfo,
  Connection,
  ParsedAccountData,
  PublicKey,
} from '@solana/web3.js';
import BN from 'bn.js';
import { deserializeUnchecked } from 'borsh';
import { AnkerSnapshot, getSolido, ProgramAddresses, StLamports } from '.';

/**
 * Anker Program State
 *
 * Reference:
 * https://github.com/ChorusOne/solido/blob/73040002ddbb62a3cee93107d03871f848ecd1e0/program/src/state.rs#L187
 */
export class Anker {
  solido_program_id: PublicKey;
  solido: PublicKey;
  b_sol_mint: PublicKey;
  token_swap_pool: PublicKey;
  terra_rewards_destination: any;
  wormhole_parameters: WormholeParameters;
  metrics: Metrics;
  self_bump_seed: number;
  mint_authority_bump_seed: number;
  reserve_authority_bump_seed: number;
  st_sol_reserve_account_bump_seed: number;
  ust_reserve_account_bump_seed: number;

  constructor(data: any) {
    try {
      const parsedData: Anker = {
        ...data,
        solido_program_id: new PublicKey(data.solido_program_id.toArray('le')),
        solido: new PublicKey(data.solido.toArray('le')),
        b_sol_mint: new PublicKey(data.b_sol_mint.toArray('le')),
        token_swap_pool: new PublicKey(data.token_swap_pool.toArray('le')),
      };

      Object.assign(this, parsedData);
    } catch (error) {
      console.log('error', error);
    }
  }
}

class WormholeParameters {
  core_bridge_program_id: PublicKey;
  token_bridge_program_id: PublicKey;

  constructor(data: any) {
    try {
      const parsedData = {
        ...data,
        core_bridge_program_id: new PublicKey(
          data.core_bridge_program_id.toArray('le')
        ),
        token_bridge_program_id: new PublicKey(
          data.token_bridge_program_id.toArray('le')
        ),
      };

      Object.assign(this, parsedData);
    } catch (error) {
      console.log('error', error);
    }
  }
}

class Metrics {
  swapped_rewards_st_sol_total: BN;
  swapped_rewards_ust_total: BN;

  constructor(data: Metrics) {
    Object.assign(this, data);
  }
}

// @ts-ignore
const schema = new Map([
  [
    WormholeParameters,
    {
      kind: 'struct',
      fields: [
        ['core_bridge_program_id', 'u256'],
        ['token_bridge_program_id', 'u256'],
      ],
    },
  ],
  [
    Metrics,
    {
      kind: 'struct',
      fields: [
        ['swapped_rewards_st_sol_total', 'u64'],
        ['swapped_rewards_ust_total', 'u64'],
      ],
    },
  ],
  [
    Anker,
    {
      kind: 'struct',
      fields: [
        ['solido_program_id', 'u256'],
        ['solido', 'u256'],
        ['b_sol_mint', 'u256'],
        ['token_swap_pool', 'u256'],
        ['terra_rewards_destination', ['u8', 20]],
        ['wormhole_parameters', WormholeParameters],
        ['metrics', Metrics],
        ['self_bump_seed', 'u8'],
        ['mint_authority_bump_seed', 'u8'],
        ['reserve_authority_bump_seed', 'u8'],
        ['st_sol_reserve_account_bump_seed', 'u8'],
        ['ust_reserve_account_bump_seed', 'u8'],
      ],
    },
  ],
]);

export const getAnker = (ankerInstanceDataBuffer: Buffer) => {
  const deserialized = deserializeUnchecked(
    schema,
    Anker,
    ankerInstanceDataBuffer
  );

  return deserialized;
};

export const getSnapshot = async (
  connection: Connection,
  programAddresses: ProgramAddresses
): Promise<AnkerSnapshot> => {
  // Record of all the account data required for snapshot
  const accountsInfoRecord: Record<
    string,
    AccountInfo<Buffer | ParsedAccountData> | null
  > = {
    [programAddresses.ankerInstanceId.toString()]: null,
    [programAddresses.solidoInstanceId.toString()]: null,
  };

  const [stSolReserveAccountAddress] = await PublicKey.findProgramAddress(
    [
      programAddresses.ankerInstanceId.toBuffer(),
      Buffer.from('st_sol_reserve_account'),
    ],
    programAddresses.ankerProgramId
  );

  accountsInfoRecord[stSolReserveAccountAddress.toString()] = null;

  // Iterates over all the required accounts data to be fetched and updates the accountsInfo record
  // Once, all we have the record of all the accounts data, we can create the snapshot
  // This way, we avoid torn reads, and fetch all the required data in one go with `getMultipleAccountInfo`
  while (true) {
    const addressesToGetAccountInfoFor = Object.keys(accountsInfoRecord).map(
      (address) => new PublicKey(address)
    );

    const multipleAccountInfos = await connection.getMultipleAccountsInfo(
      addressesToGetAccountInfoFor,
      { encoding: 'jsonParsed' }
    );

    multipleAccountInfos.forEach((info, i) => {
      accountsInfoRecord[addressesToGetAccountInfoFor[i].toString()] =
        info as AccountInfo<Buffer>;
    });

    const ankerInstanceAccountInfo =
      accountsInfoRecord[programAddresses.ankerInstanceId.toString()];
    const solidoInstanceAccountInfo =
      accountsInfoRecord[programAddresses.solidoInstanceId.toString()];
    const stSolReserveAccountInfo =
      accountsInfoRecord[stSolReserveAccountAddress.toString()];

    if (
      !ankerInstanceAccountInfo ||
      !solidoInstanceAccountInfo ||
      !stSolReserveAccountInfo
    ) {
      throw new Error('Please check the program deployment addresses');
    }

    const solido = getSolido(solidoInstanceAccountInfo.data as Buffer);

    const anker = getAnker(ankerInstanceAccountInfo.data as Buffer);

    if (stSolReserveAccountInfo.data instanceof Buffer) {
      throw new Error('stSOL reserve account info not json parsed');
    }

    return {
      anker,
      solido,
      stSolReserveAccountBalance: new StLamports(
        stSolReserveAccountInfo.data.parsed.info.tokenAmount.amount
      ),
    };
  }
};