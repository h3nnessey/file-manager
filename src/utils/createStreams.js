import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { ERROR_TYPES } from '../constants/constants.js';

export const createStreams = (readPath, writePath) => {
    return new Promise(async (resolve, reject) => {
        try {
            const readPathIsFile = (await stat(readPath)).isFile();

            if (!readPathIsFile) {
                return reject(ERROR_TYPES.operationFailed);
            }

            const readStream = createReadStream(readPath);
            const writeStream = createWriteStream(writePath);

            readStream.on('error', () => {
                reject(ERROR_TYPES.operationFailed);
            });

            writeStream.on('error', () => {
                reject(ERROR_TYPES.operationFailed);
            });

            resolve([readStream, writeStream]);
        } catch {
            reject(ERROR_TYPES.operationFailed);
        }
    });
};
