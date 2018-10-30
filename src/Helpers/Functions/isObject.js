import isNull from './isNull';
import isArray from './isArray';

export default function isObject(value) {
    return (typeof value === 'object') && !isNull(value) && !isArray(value);
}
