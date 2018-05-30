import { filter } from 'lodash-es';
import { isNull } from 'lodash-es';
import { mapKeys } from 'lodash-es';
import { isObject } from 'lodash-es';
import { isBoolean } from 'lodash-es';
import { isUndefined } from 'lodash-es';

export default function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = key || value;

        return filter([
            prefix,
            string.replace(new RegExp(`^${prefix}${delimeter}?`), '')
        ]).join(delimeter);
    }

    if(isBoolean(subject) || isNull(subject) || isUndefined(subject)) {
        return subject;
    }

    if(isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}
