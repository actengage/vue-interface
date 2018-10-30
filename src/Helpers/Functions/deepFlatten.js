import isArray from './isArray';
import concatMap from './concatMap';

export default function deepFlatten(x) {
    return concatMap(x => isArray(x) ? deepFlatten (x) : x)(x);
}
