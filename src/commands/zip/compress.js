import { createBrotliCompress, constants } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createWriteStream, createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist } from '../../utils/index.js';

export const compress = async payload => {
    const [filePath, archivePath] = parseArgs(payload, 'zip');
    const brotli = createBrotliCompress({
        params: {
            [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
        },
    });

    const isArchiveAlreadyExist = await isExist(resolve(archivePath));
    if (isArchiveAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const readStream = createReadStream(resolve(filePath));
        const writeStream = createWriteStream(resolve(archivePath));

        await pipeline(readStream, brotli, writeStream);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
