import { basename, resolve, join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist, createStreams } from '../../utils/index.js';

export const mv = async (payload = []) => {
    const [filePath, copyDir] = parseArgs(payload, 'mv');
    const filename = basename(resolve(filePath));
    const newFilePath = join(resolve(copyDir), filename);

    const isFileAlreadyExist = await isExist(newFilePath);
    if (isFileAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const [readStream, writeStream] = await createStreams(resolve(filePath), newFilePath);

        await pipeline(readStream, writeStream);
        await rm(filePath);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
