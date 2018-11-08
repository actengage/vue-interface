import key from './key';

export default function each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], key(i));
    }
}
