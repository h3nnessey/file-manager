import { cwdLogger, colorizeText } from './index.js';

export const errorLogger = err => {
    const errMessage = colorizeText(err.message, 'red');

    console.log(errMessage);
    cwdLogger();
};
