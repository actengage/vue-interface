import { mapKeys } from 'lodash';
import { isObject } from 'lodash';

export default function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = key || value;

        return [
            prefix,
            string.replace(new RegExp(`^${prefix}${delimeter}?`), '')
        ].join(delimeter);
    }

    if(isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}
