import { colorizeText } from './colorizeText.js';

export const cwdLogger = () => {
    const cwd = colorizeText(process.cwd(), 'green');

    console.log(`You are currently in ${cwd}`);
};
