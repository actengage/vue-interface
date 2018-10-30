import key from './key';
import isNumeric from './isNumeric';

export default function each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], key(i));
    }
}
