import { ERROR_TYPES, REGEXP_MAP, ARGS_COUNT } from '../constants/constants.js';

export const parseArgs = (args = [], cmd) => {
    if (!args.length) throw Error(ERROR_TYPES.invalidInput);
    args = args.join(' ');

    const result = [];

    while (args.length !== 0) {
        if (args[0] === '"' || args[0] === "'") {
            const quote = args[0];
            const regexp = REGEXP_MAP[quote];
            const match = args.match(regexp)[0];

            result.push(match.replaceAll(quote, ''));
            args = args.replace(match, '').trim();
        } else {
            const arg = args.split(' ')[0];

            result.push(arg);
            args = args.replace(arg, '').trim();
        }
    }

    if (result.length < ARGS_COUNT[cmd] || result.length > ARGS_COUNT[cmd]) {
        throw new Error(ERROR_TYPES.invalidInput);
    }

    return result.length > 1 ? result : result.toString();
};
