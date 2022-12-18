import { resolve } from 'node:path';
import { rm as remove } from 'node:fs/promises';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';

export const rm = async payload => {
    const filePath = parseArgs(payload, 'rm');
    const resolvedFilePath = resolve(filePath);

    try {
        await remove(resolvedFilePath);
    } catch (err) {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
