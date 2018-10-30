import isNumeric from './isNumeric';

export default function key(value) {
    return isNumeric(value) ? parseFloat(value) : value;
}
