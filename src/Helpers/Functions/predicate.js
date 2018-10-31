import isArray from './isArray';
import matches from './matches';
import isObject from './isObject';
import property from './property';
import isFunction from './isFunction';
import matchesProperty from './matchesProperty';

export default function predicate(value) {
    if (isObject(value)) {
        value = matches(value);
    }
    else if (isArray(value)) {
        value = matchesProperty(value[0], value[1]);
    }
    else if (!isFunction(value)) {
        value = property(value);
    }

    return value;
}
