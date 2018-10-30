import each from './each';

export default function map(object, fn) {
    const mapped = {};

    each(object, (value, key) => {
        mapped[key] = fn(value, key);
    });

    return mapped;
}
