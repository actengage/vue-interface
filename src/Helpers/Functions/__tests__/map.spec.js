import map from '../map';

test('map() array', () => {
    const subject = map([1, 2, 3], (value, index) => {
        return value + index;
    });

    expect(subject[0]).toBe(1);
    expect(subject[1]).toBe(3);
    expect(subject[2]).toBe(5);
});

test('map() object', () => {
    const subject = map({
        'a': 1,
        'b': 2,
        'c': 3
    }, (value, index) => {
        return index + value;
    });

    expect(subject.a).toBe('a1');
    expect(subject.b).toBe('b2');
    expect(subject.c).toBe('c3');
});
