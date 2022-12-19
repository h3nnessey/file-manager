import { greeting, createReadline } from './init/index.js';

const fileManager = async () => {
    await greeting();
    await createReadline();
};

await fileManager();
