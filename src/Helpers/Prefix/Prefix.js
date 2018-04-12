import isNull from 'lodash-es/isNull';
import mapKeys from 'lodash-es/mapKeys';
import isObject from 'lodash-es/isObject';
import isUndefined from 'lodash-es/isUndefined';

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
