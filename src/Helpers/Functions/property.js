import get from './get';

export default function property(path) {
    return object => {
        return get(object, path);
    };
}
