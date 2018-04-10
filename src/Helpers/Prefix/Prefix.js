import { isNull } from 'lodash';
import { mapKeys } from 'lodash';
import { isObject } from 'lodash';
import { isUndefined } from 'lodash';

export default function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = key || value;

        return [
            prefix,
            string.replace(new RegExp(`^${prefix}${delimeter}?`), '')
        ].join(delimeter);
    }

    if(isNull(subject) || isUndefined(subject)){
        return subject;
    }

    if(isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}
