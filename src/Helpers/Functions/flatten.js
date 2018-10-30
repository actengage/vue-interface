import concatMap from './concatMap';

export default function flatten(x) {
    return concatMap(x => x)(x)
}
