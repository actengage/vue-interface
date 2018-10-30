import concatMap from '../concatMap';

test('concatMap()', () => {
    expect(concatMap(x => x)([[1, 2], [3, 4]])).toHaveLength(4);
    expect(concatMap(x => x)([[1, 2], [3, 4]])).toHaveLength(4);
});
