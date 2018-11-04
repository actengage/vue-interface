import isArray from './isArray';
import isNumber from './isNumber';

export default function isNumeric(value) {
    return isNumber(value) || (
        !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}
