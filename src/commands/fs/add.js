import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { errorTypes } from '../../errorTypes/index.js';

export const add = async payload => {
    if (!payload.length) throw new Error(errorTypes.invalidInput);

    const fileName = payload.length > 1 ? payload.join(' ') : payload.toString();

    const filePath = resolve(fileName);

    try {
        await writeFile(filePath, '', { flag: 'wx' });
    } catch {
        throw new Error(errorTypes.operationFailed);
    }
};
