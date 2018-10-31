import each from './each';
import predicate from './predicate';

export default function pickBy(object, match) {
    const subject = {};

    each(object, (value, key) => {
        if (predicate(match)(value)) {
            subject[key] = value;
        }
    });

    return subject;
}
