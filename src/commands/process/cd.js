import { resolve, sep } from 'node:path';
import { errorTypes } from '../../errorTypes/index.js';

export const cd = payload => {
    if (!payload.length) throw new Error(errorTypes.invalidInput);

    let dirPath = payload.length > 1 ? payload.join(' ') : payload.toString();

    if (dirPath.endsWith(':') && dirPath.length === 2) dirPath += sep;

    const resolvedDirPath = resolve(dirPath.toString());

    try {
        process.chdir(resolvedDirPath);
    } catch {
        throw new Error(errorTypes.invalidInput);
    }
};
