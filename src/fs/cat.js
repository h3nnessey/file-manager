import { resolve } from 'node:path';
import fs from 'node:fs';
import { EOL } from 'node:os';
import { cwdLogger } from '../helpers/loggers/index.js';

export const cat = filePath => {
    if (filePath.length > 1) {
        filePath = filePath.join(' ');
    }

    const resolvedFilePath = resolve(process.cwd(), filePath.toString());
    const readStream = fs.createReadStream(resolvedFilePath, { encoding: 'utf-8' });

    readStream.on('data', chunk => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        process.stdout.write(EOL);
        cwdLogger();
    });

    // need validation for file -> operation failed etc
};
