import { resolve, sep } from 'node:path';
import { cwdLogger } from '../helpers/loggers/index.js';

export const cd = dirPath => {
    // cd program files/another files - will work
    if (dirPath.length > 1) {
        dirPath = dirPath.join(' ');
    }
    // cd c: will work
    if (dirPath.toString().endsWith(':')) {
        dirPath += sep;
    }

    const dir = resolve(process.cwd(), dirPath.toString());
    process.chdir(dir);
    cwdLogger();
    // need some tests for emulate linux/mac
};
