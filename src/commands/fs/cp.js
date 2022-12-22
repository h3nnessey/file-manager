import { basename, resolve, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, createStreams, isExist } from '../../utils/index.js';

export const cp = async (payload = []) => {
    const [filePath, copyDir] = parseArgs(payload, 'cp');
    const filename = basename(resolve(filePath));
    const newFilePath = join(resolve(copyDir), filename);

    const isFileAlreadyExist = await isExist(newFilePath);
    if (isFileAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const [readStream, writeStream] = await createStreams(resolve(filePath), newFilePath);

        await pipeline(readStream, writeStream);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
