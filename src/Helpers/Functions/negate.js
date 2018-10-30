import isFunction from './isFunction';

export default function negate(fn) {
    return (...args) => isFunction(fn) ? !fn(...args) : !fn;
}
