import * as readline from 'node:readline/promises';
import { commands } from './commands.js';
import { EOL, homedir } from 'node:os';

const initApp = async () => {
    const userName = process.argv.find(arg => arg.startsWith('--username')).split('=')[1];

    process.chdir(homedir());

    console.log(
        `Welcome to the File Manager, ${userName}!${EOL}You are currently in ${process.cwd()}`
    );

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', async line => {
        const [command, ...payload] = line.trim().split(' ');

        if (command === '.exit') await commands('exit', userName);

        try {
            await commands(command, payload);
        } catch {
            await commands('default');
        }
    });

    rl.on('SIGINT', async () => {
        await commands('exit', userName);
    });
};

await initApp();
