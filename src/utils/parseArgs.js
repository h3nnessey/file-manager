import { ERROR_TYPES, REGEXP_MAP, ARGS_COUNT } from '../constants/constants.js';

export const parseArgs = (payload = [], cmd) => {
    if (!payload.length) throw Error(ERROR_TYPES.invalidInput);

    let args = payload.join(' ').trim();

    const parsedArgs = [];
    const argsCount = ARGS_COUNT[cmd];

    try {
        while (args.length !== 0) {
            if (args[0] === '"' || args[0] === "'") {
                const quote = args[0];
                const regexp = REGEXP_MAP[quote];
                const match = args.match(regexp)[0];

                parsedArgs.push(match.replaceAll(quote, ''));
                args = args.replace(match, '').trim();
            } else {
                const arg = args.split(' ')[0];

                parsedArgs.push(arg);
                args = args.replace(arg, '').trim();
            }
        }
    } catch {
        throw new Error(ERROR_TYPES.operationFailed);
    }

    if (parsedArgs.length < argsCount || parsedArgs.length > argsCount) {
        throw new Error(ERROR_TYPES.invalidInput);
    }

    return parsedArgs.length > 1 ? parsedArgs : parsedArgs.toString();
};
