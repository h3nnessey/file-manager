import { resolve } from 'node:path';
import { rm as remove } from 'node:fs/promises';
import { errorTypes } from '../../errorTypes/index.js';

const rm = async payload => {
    if (!payload.length) throw new Error(errorTypes.invalidInput);

    const filePath = payload.length > 1 ? payload.join(' ') : payload.toString();

    const resolvedFilePath = resolve(filePath);

    try {
        await remove(resolvedFilePath);
    } catch (err) {
        throw new Error(errorTypes.operationFailed);
    }
};

export { rm };
