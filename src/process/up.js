import { cwdLogger } from '../helpers/loggers/index.js';

export const up = () => {
    process.chdir('..');
    cwdLogger();
};
