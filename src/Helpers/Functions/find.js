import first from './first';
import predicate from './predicate';

export default function find(subject, value) {
    return first(subject.filter(object => predicate(value)(object)));
}
