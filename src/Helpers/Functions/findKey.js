import first from './first';
import predicate from './predicate';

export default function findIndex(object, value) {
    return first(Object.keys(object).filter(
        key => predicate(value)(object[key])
    ));
}
