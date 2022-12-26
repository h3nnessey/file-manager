import { Worker } from 'node:worker_threads';
import { workerPath } from './workerContext.js';

export const createHashWorker = async filePath => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData: filePath });

        worker.on('message', resolve);
        worker.on('error', reject);
    });
};
