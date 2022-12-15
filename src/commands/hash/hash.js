import { resolve } from 'node:path';
import { errorTypes } from '../../errorTypes/index.js';
import { Worker } from 'node:worker_threads';
import { workerPath } from './workerContext.js';

const createHashWorker = async filePath => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData: filePath });

        worker.on('message', resolve);
        worker.on('error', reject);
    });
};

export const hash = async payload => {
    if (!payload.length) throw new Error(errorTypes.invalidInput);

    const filePath = payload.length > 1 ? payload.join(' ') : payload.toString();

    const resolvedFilePath = resolve(filePath);

    try {
        const calculatedHash = await createHashWorker(resolvedFilePath);

        console.log(calculatedHash);
    } catch (err) {
        throw new Error(errorTypes.operationFailed);
    }
};
