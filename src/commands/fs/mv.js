import { basename, resolve, join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { ERROR_TYPES } from '../../constants/constants.js';
import { parseArgs, isExist } from '../../utils/index.js';

export const mv = async (payload = []) => {
    const [filePath, copyDir] = parseArgs(payload, 'mv');
    const filename = basename(resolve(filePath));
    const newFilePath = join(resolve(copyDir), filename);

    const isFileAlreadyExist = await isExist(newFilePath);
    if (isFileAlreadyExist) throw new Error(ERROR_TYPES.operationFailed);

    try {
        const readStream = createReadStream(resolve(filePath));
        const writeStream = createWriteStream(newFilePath);

        await pipeline(readStream, writeStream);
        await rm(filePath);
    } catch (err) {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
