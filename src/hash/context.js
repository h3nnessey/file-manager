import { fileURLToPath } from 'node:url';
import { dirname, join as pathJoin } from 'node:path';

export const workerPath = (() => {
    const dir = dirname(fileURLToPath(import.meta.url));
    return pathJoin(dir, 'hashWorker.js');
})();
