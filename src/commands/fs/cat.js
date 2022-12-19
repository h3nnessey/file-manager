import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist } from '../../utils/index.js';

export const cat = async (payload = []) => {
    const filePath = parseArgs(payload, 'cat');
    const resolvedFilePath = resolve(filePath);

    const isFileExist = await isExist(resolvedFilePath);
    if (!isFileExist) throw new Error(ERROR_TYPES.operationFailed);

    const readStream = createReadStream(resolvedFilePath, 'utf-8');

    readStream.on('data', data => {
        console.log(data);
    });
};
