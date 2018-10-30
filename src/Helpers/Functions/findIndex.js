import key from './key';
import predicate from './predicate';

export default function findIndex(subject, value) {
    for(const i in subject) {
        if(predicate(value)(subject[i])) {
            return key(i);
        }
    }

    return -1;
}
