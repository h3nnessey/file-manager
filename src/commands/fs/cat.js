import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs } from '../../utils/index.js';

export const cat = async (payload = []) => {
    const filePath = parseArgs(payload, 'cat');
    const resolvedFilePath = resolve(filePath);

    try {
        await new Promise((resolve, reject) => {
            const readStream = createReadStream(resolvedFilePath, 'utf-8');

            readStream.on('data', data => {
                console.log(data);
            });

            readStream.on('end', resolve);

            readStream.on('error', () => reject(ERROR_TYPES.operationFailed));
        });
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
