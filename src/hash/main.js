import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { workerPath } from './context.js';
import { Worker } from 'node:worker_threads';
import { cwdLogger, operationFailedLogger } from '../helpers/loggers/index.js';

const isExistAndFile = async path => {
    try {
        (await stat(path)).isFile();
        return true;
    } catch {
        return false;
    }
};

export const createHashWorker = async filePath => {
    if (filePath.length > 1) {
        filePath = filePath.join(' ');
    }

    filePath = resolve(process.cwd(), filePath.toString());
    const isFile = isExistAndFile(filePath);

    if (isFile) {
        const worker = new Worker(workerPath, { workerData: filePath });

        worker.on('message', data => {
            console.log(`Hash (SHA-256): ${data}`);
            cwdLogger();
        });

        worker.on('error', _ => {
            operationFailedLogger();
            cwdLogger();
        });
    } else {
        operationFailedLogger();
        cwdLogger();
    }
};
