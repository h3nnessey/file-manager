import readline from 'node:readline/promises';
import { commands } from '../commands/commands.js';
import { cwdLogger, errorLogger } from '../utils/index.js';

export const createReadline = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '$ ',
    });

    rl.prompt();

    rl.on('line', async line => {
        const [command, ...payload] = line.trim().split(' ');

        try {
            await commands(command, payload);
            cwdLogger();
        } catch (err) {
            errorLogger(err);
        }

        rl.prompt();
    });

    rl.on('SIGINT', async () => {
        await commands('.exit');
    });
};
