import { createBrotliCompress, constants } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist, createStreams } from '../../utils/index.js';

export const compress = async (payload = []) => {
    const [filePath, archivePath] = parseArgs(payload, 'zip');
    const brotli = createBrotliCompress({
        params: {
            [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
        },
    });

    const isArchiveAlreadyExist = await isExist(resolve(archivePath));
    if (isArchiveAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const [readStream, writeStream] = await createStreams(
            resolve(filePath),
            resolve(archivePath)
        );

        await pipeline(readStream, brotli, writeStream);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
