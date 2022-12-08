import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { parentPort, workerData } from 'node:worker_threads';

const calculateHash = () => {
    const readStream = fs.createReadStream(workerData);
    const fileHash = createHash('sha256');

    readStream.on('data', chunk => {
        fileHash.update(chunk);
    });

    readStream.on('end', () => {
        parentPort.postMessage(fileHash.digest('hex'));
    });
};

calculateHash();
