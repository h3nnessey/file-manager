import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const workerPath = (() => {
    const dir = dirname(fileURLToPath(import.meta.url));
    return join(dir, './worker.js');
})();
