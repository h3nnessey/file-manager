import { user } from '../../entities/user.js';
import { ERROR_TYPES } from '../../constants/constants.js';
import { colorizeText } from '../../utils/index.js';

export const exit = (payload = []) => {
    if (payload.length) throw new Error(ERROR_TYPES.invalidInput);

    const userName = user.getUserName();

    console.log(`Thank you for using File Manager, ${colorizeText(userName, 'yellow')},goodbye!`);
    process.exit();
};
