import get from './get';

export default function matchesProperty(path, value) {
    return subject => {
        return get(subject, path) === value;
    };
}
