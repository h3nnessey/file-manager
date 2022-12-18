import { resolve } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';
import { createHashWorker } from './createHashWorker.js';

export const hash = async payload => {
    const filePath = parseArgs(payload, 'hash');
    const resolvedFilePath = resolve(filePath);

    try {
        const calculatedHash = await createHashWorker(resolvedFilePath);

        console.log(calculatedHash);
    } catch (err) {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
