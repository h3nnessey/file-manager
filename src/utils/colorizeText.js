import { TEXT_COLORS } from '../constants/constants.js';

export const colorizeText = (text, color) => {
    return `${TEXT_COLORS[color]}${text}\x1b[0m`;
};
