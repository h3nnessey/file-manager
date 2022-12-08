import { readdir } from 'node:fs/promises';
import { cwdLogger } from '../helpers/loggers/index.js';

export const ls = async () => {
    const currentDir = process.cwd();
    const content = await readdir(currentDir, { withFileTypes: true });

    const transformedContent = content.map(item => {
        return { name: item.name, type: item.isFile() ? 'file' : 'directory' };
    });

    console.table(transformedContent);
    cwdLogger();
    // need sort for output
};
