import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';

export const createStreams = (readPath, writePath) => {
    return new Promise(async (resolve, reject) => {
        try {
            const readPathIsFile = (await stat(readPath)).isFile();

            if (!readPathIsFile) {
                return reject();
            }

            const readStream = createReadStream(readPath);
            const writeStream = createWriteStream(writePath);

            readStream.on('error', reject);
            writeStream.on('error', reject);

            resolve([readStream, writeStream]);
        } catch {
            reject();
        }
    });
};
