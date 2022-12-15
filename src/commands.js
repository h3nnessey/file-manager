import { hash } from './commands/hash/hash.js';
import { ls, cat, add, rm, rn } from './commands/fs/index.js';
import { cd, up, exit } from './commands/process/index.js';
import { os } from './commands/os/os.js';
import { errorTypes } from './errorTypes/index.js';

export const commands = async (command, payload) => {
    switch (command) {
        case 'ls': {
            await ls(payload);
            break;
        }
        case '.exit': {
            exit(payload);
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
            await hash(payload);
            break;
        }
        case 'add': {
            await add(payload);
            break;
        }
        case 'os': {
            os(payload);
            break;
        }
        case 'cat': {
            await cat(payload);
            break;
        }
        case 'rm': {
            await rm(payload);
            break;
        }
        // todo
        // case 'rn': {
        //     await rn(payload);
        //     break;
        // }
        // case 'cp': {
        //     await cp(payload)
        //     break;
        // }
        // case 'mv': {
        //     await mv(payload)
        //     break;
        // }
        // case 'compress': {
        //     await compress(payload)
        //     break;
        // }
        // case 'decompress': {
        //     await decompress(payload)
        //     break;
        // }
        default: {
            throw new Error(errorTypes.invalidInput);
        }
    }
};
