import { rename } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';

export const rn = async (payload = []) => {
    const [filePath, filename] = parseArgs(payload, 'rn');
    const oldPath = resolve(filePath);
    const dir = dirname(oldPath);
    const newPath = join(dir, filename);

    try {
        await rename(oldPath, newPath);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
