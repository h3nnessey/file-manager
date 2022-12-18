import * as readline from 'node:readline/promises';
import { commands } from './commands.js';
import { EOL, homedir } from 'node:os';
import { user } from './entities/user.js';

const init = async () => {
    const userName = process.argv.find(arg => arg.startsWith('--username')).split('=')[1];
    user.setUserName(userName);

    process.chdir(homedir());
    console.log(
        `Welcome to the File Manager, ${userName}!${EOL}You are currently in ${process.cwd()}`
    );
};

const fileManager = async () => {
    await init();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', async line => {
        const [command, ...payload] = line.trim().split(' ');

        try {
            await commands(command, payload);
            console.log(process.cwd());
        } catch (err) {
            console.log(err.message);
            console.log(process.cwd());
        }
    });

    rl.on('SIGINT', async () => {
        await commands('.exit');
    });
};

await fileManager();
