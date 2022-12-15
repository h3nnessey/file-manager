import { user } from '../../entities/user.js';
import { errorTypes } from '../../errorTypes/index.js';

export const exit = (payload = '') => {
    if (payload.length) throw new Error(errorTypes.invalidInput);

    const userName = user.getUserName();

    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
};
