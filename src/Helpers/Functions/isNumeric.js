import isNumber from './isNumber';

export default function isNumeric(value) {
    return isNumber(value) || (!!value && !!value.toString().match(/^-?[\d.,]+$/));
}
