import { ERROR_TYPES } from '../../constants/constants.js';

export const up = payload => {
    if (payload.length) throw new Error(ERROR_TYPES.invalidInput);

    process.chdir('..');
};
