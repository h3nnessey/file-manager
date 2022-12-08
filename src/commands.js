import { createHashWorker } from './hash/main.js';
import { invalidInputLogger, cwdLogger } from './helpers/loggers/index.js';
import { ls, cat, add } from './fs/index.js';
import { cd, up } from './process/index.js';
import { OS } from './os/os.js';

export const commands = async (command, payload) => {
    switch (command) {
        case 'ls': {
            await ls();
            break;
        }
        case 'exit': {
            console.log(`Thank you for using File Manager, ${payload}, goodbye!`);
            process.exit(0);
            break;
        }
        case 'cd': {
            cd(payload);
            break;
        }
        case 'up': {
            up();
            break;
        }
        case 'hash': {
            await createHashWorker(payload);
            break;
        }
        case 'add': {
            await add(payload);
            break;
        }
        case 'os': {
            OS(payload);
            break;
        }
        case 'cat': {
            cat(payload);
            break;
        }
        default: {
            invalidInputLogger();
            cwdLogger();
        }
    }
};
