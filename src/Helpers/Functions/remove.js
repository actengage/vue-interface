import key from './key';
import predicate from './predicate';

export default function remove(array, match) {
    const indexes = [];

    for(const i in array) {
        if(predicate(match)(array[i])) {
            indexes.push(key(i));
        }
    }

    return array.filter((value, i) => {
        return indexes.indexOf(i) !== -1;
    })
}
