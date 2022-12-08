import os from 'node:os';
import { cwdLogger, invalidInputLogger, operationFailedLogger } from '../helpers/loggers/index.js';

export const OS = argument => {
    const arg = argument.toString();
    switch (arg) {
        case '--EOL': {
            console.log(JSON.stringify(os.EOL));
            break;
        }
        case '--cpus': {
            console.log(os.cpus());
            break;
        }
        case '--homedir': {
            console.log(os.homedir());
            break;
        }
        case '--username': {
            try {
                console.log(os.userInfo().username);
                break;
            } catch {
                operationFailedLogger();
                break;
            }
        }
        case '--architecture': {
            console.log(os.arch());
            break;
        }
        default: {
            invalidInputLogger();
            break;
        }
    }

    cwdLogger();
};
