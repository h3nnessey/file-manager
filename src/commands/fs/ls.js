import { readdir } from 'node:fs/promises';
import { ERROR_TYPES } from '../../constants/constants.js';

export const ls = async (payload = []) => {
    if (payload.length) throw new Error(ERROR_TYPES.invalidInput);

    try {
        const content = await readdir(process.cwd(), { withFileTypes: true });

        const transformedContent = content.map(item => {
            return { name: item.name, type: item.isFile() ? 'file' : 'directory' };
        });

        const dirs = transformedContent.filter(item => item.type === 'directory').sort();
        const files = transformedContent.filter(item => item.type === 'file').sort();
        const sortedContent = dirs.concat(files);

        console.table(sortedContent);
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }
};
