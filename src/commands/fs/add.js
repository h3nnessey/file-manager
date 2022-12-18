import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { parseArgs } from '../../utils/index.js';
import { ERROR_TYPES } from '../../constants/constants.js';

export const add = async payload => {
    const fileName = parseArgs(payload, 'add');
    const filePath = resolve(fileName);

    try {
        await writeFile(filePath, '', { flag: 'wx' });
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
