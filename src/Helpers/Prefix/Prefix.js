import {
    mapKeys,
    isObject,
    isBoolean
} from '../Functions';

export default function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = (key || value)
            .replace(new RegExp(`^${prefix}${delimeter}?`), '');

        return [prefix, string].filter(value => !!value).join(delimeter);
    };

    if (isBoolean(subject)) {
        return subject;
    }

    if (isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}
