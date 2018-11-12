import isNull from './isNull';
import isArray from './isArray';
import isObject from './isObject';
import isUndefined from './isUndefined';

export default function isEmpty(value) {
    if(isArray(value)) {
        return value.length === 0;
    }
    else if(isObject(value)) {
        return Object.keys(value).length === 0;
    }

    return value === '' || isNull(value) || isUndefined(value);
}
