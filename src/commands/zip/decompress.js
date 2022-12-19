import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createWriteStream, createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist } from '../../utils/index.js';

export const decompress = async (payload = []) => {
    const [archivePath, filePath] = parseArgs(payload, 'zip');
    const brotli = createBrotliDecompress();

    const isFileAlreadyExist = await isExist(filePath);
    if (isFileAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const readStream = createReadStream(resolve(archivePath));
        const writeStream = createWriteStream(resolve(filePath));

        await pipeline(readStream, brotli, writeStream);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
