export default function concatMap(fn) {
    return x => {
        return x.map(fn).reduce((x, y) => x.concat(y), []);
    }
}
