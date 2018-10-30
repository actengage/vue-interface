import isFunction from './isFunction';

export default function wrap(subject, fn) {
    return value => {
        return isFunction(fn) ? fn(subject, value) : value;
    }
};
