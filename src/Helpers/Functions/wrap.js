import isFunction from './isFunction';

export default function wrap(subject, fn) {
    return (...args) => {
        return isFunction(fn) ? fn(subject, ...args) : args;
    };
};
