import { join as pathJoin } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { cwdLogger, operationFailedLogger } from '../helpers/loggers/index.js';

export const add = async fileName => {
    if (fileName.length > 1) {
        fileName = fileName.join(' ');
    }

    const currentDir = process.cwd();
    const filePath = pathJoin(currentDir, fileName.toString());

    try {
        await writeFile(filePath, '', { flag: 'wx' });
        cwdLogger();
    } catch {
        operationFailedLogger();
    }
};
