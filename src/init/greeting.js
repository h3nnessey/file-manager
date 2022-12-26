import { user } from '../entities/user.js';
import { homedir } from 'node:os';
import { colorizeText, cwdLogger } from '../utils/index.js';

export const greeting = async () => {
    try {
        const userName = process.argv.find(arg => arg.startsWith('--username')).split('=')[1];

        user.setUserName(userName);
        process.chdir(homedir());

        console.log(`Welcome to the File Manager, ${colorizeText(userName, 'yellow')}!`);
        cwdLogger();
    } catch {
        throw new Error('Invalid arguments');
    }
};
