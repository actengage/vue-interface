export default function(value, ...args) {
    return typeof value === 'function' ? value(...args) : value;
};