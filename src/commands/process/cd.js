import { resolve, sep } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';

export const cd = (payload = []) => {
    let dirPath = parseArgs(payload, 'cd');

    // c:, d: etc will work
    if (dirPath.endsWith(':') && dirPath.length === 2) dirPath += sep;

    const resolvedDirPath = resolve(dirPath);

    try {
        process.chdir(resolvedDirPath);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
