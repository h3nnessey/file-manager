import { parentPort, workerData } from 'node:worker_threads';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const readStream = createReadStream(workerData);
    const hash = createHash('sha256');

    readStream.on('data', chunk => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        parentPort.postMessage(hash.digest('hex'));
    });
};

await calculateHash();
