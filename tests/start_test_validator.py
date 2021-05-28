#!/usr/bin/env python3

"""
Start a test validator and wait for it to be available, then print its PID.

This script is used to start the test validator on CI.
"""

import subprocess
import sys
import time

from typing import Optional

# Start the validator, pipe its stdout to /dev/null.
test_validator = subprocess.Popen(
    [
        'solana-test-validator',
    ],
    stdout=subprocess.DEVNULL,
)

# Wait up to 5 seconds for the validator to be running and processing blocks. We
# check this by running "solana block-height", and observing at least one
# increase. If that is the case, the RPC is available, and the validator must be
# producing blocks. Previously we only checked "solana cluster-version", but
# this can return a response before the validator is ready to accept
# transactions.
last_observed_block_height: Optional[int] = None

for _ in range(50):
    result = subprocess.run(
        ['solana', 'block-height'],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
    )
    if result.returncode == 0:
        current_block_height = int(result.stdout)
        if (
            last_observed_block_height is not None
            and current_block_height > last_observed_block_height
        ):
            break
        last_observed_block_height = current_block_height

    sleep_seconds = 0.1
    time.sleep(sleep_seconds)

is_rpc_online = last_observed_block_height is not None

if is_rpc_online and test_validator.poll() is None:
    # The RPC is online, and the process is still running.
    print(test_validator.pid)

elif is_rpc_online:
    print('RPC is online, but the process is gone ... was a validator already running?')
    sys.exit(1)

else:
    print('Test validator is still not responding, something is wrong.')
    sys.exit(1)
