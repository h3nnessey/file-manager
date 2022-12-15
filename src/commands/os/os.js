import { EOL, cpus, homedir, userInfo, arch } from 'node:os';
import { errorTypes } from '../../errorTypes/index.js';

export const os = payload => {
    if (!payload.length || payload.length > 1) throw new Error(errorTypes.invalidInput);

    const arg = payload.toString();

    switch (arg) {
        case '--EOL': {
            console.log(JSON.stringify(EOL));
            break;
        }
        case '--cpus': {
            console.log(cpus());
            break;
        }
        case '--homedir': {
            try {
                console.log(homedir());
                break;
            } catch {
                throw new Error(errorTypes.operationFailed);
            }
        }
        case '--username': {
            try {
                console.log(userInfo().username);
                break;
            } catch {
                throw new Error(errorTypes.operationFailed);
            }
        }
        case '--architecture': {
            console.log(arch());
            break;
        }
        default: {
            throw new Error(errorTypes.invalidInput);
        }
    }
};
