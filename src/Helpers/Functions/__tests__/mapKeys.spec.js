import mapKeys from '../mapKeys';

test('mapKeys()', () => {
    const subject = mapKeys({
        'a': 1,
        'b': 2,
        'c': 3
    }, (value, index) => {
        return value + index;
    });

    expect(subject['1a']).toBe(1);
    expect(subject['2b']).toBe(2);
    expect(subject['3c']).toBe(3);
});
