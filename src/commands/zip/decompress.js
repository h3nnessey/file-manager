import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist, createStreams } from '../../utils/index.js';

export const decompress = async (payload = []) => {
    const [archivePath, filePath] = parseArgs(payload, 'zip');
    const brotli = createBrotliDecompress();

    const isFileAlreadyExist = await isExist(filePath);
    if (isFileAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const [readStream, writeStream] = await createStreams(
            resolve(archivePath),
            resolve(filePath)
        );

        await pipeline(readStream, brotli, writeStream);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
