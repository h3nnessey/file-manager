import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { errorTypes } from '../../errorTypes/index.js';

const concatenate = path => {
    return new Promise((resolve, reject) => {
        const readStream = createReadStream(path, { encoding: 'utf-8' });

        readStream.on('data', chunk => {
            console.log(chunk);
        });

        readStream.on('error', reject);
    });
};

export const cat = async payload => {
    if (!payload.length) throw new Error(errorTypes.invalidInput);

    const filePath = payload.length > 1 ? payload.join(' ') : payload.toString();

    const resolvedFilePath = resolve(filePath);

    try {
        await concatenate(resolvedFilePath);
    } catch (err) {
        throw new Error(errorTypes.operationFailed);
    }
};
