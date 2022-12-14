import { EOL, cpus, homedir, userInfo, arch } from 'node:os';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';

export const os = (payload = []) => {
    const arg = parseArgs(payload, 'os');

    switch (arg) {
        case '--EOL': {
            console.log(JSON.stringify(EOL));
            break;
        }
        case '--cpus': {
            const cpusCount = cpus().length;
            const cpusArray = cpus().map(cpu => ({
                model: cpu.model,
                speed: `${cpu.speed / 1000} GHz`,
            }));

            console.log(`Total CPUs count: ${cpusCount}`);
            console.table(cpusArray);
            break;
        }
        case '--homedir': {
            try {
                console.log(homedir());
                break;
            } catch {
                throw new Error(ERROR_TYPES.operationFailed);
            }
        }
        case '--username': {
            try {
                console.log(userInfo().username);
                break;
            } catch {
                throw new Error(ERROR_TYPES.operationFailed);
            }
        }
        case '--architecture': {
            console.log(arch());
            break;
        }
        default: {
            throw new Error(ERROR_TYPES.invalidInput);
        }
    }
};
