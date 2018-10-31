import first from '../first';

test('first()', () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first(1)).toBe(undefined);
    expect(first('123')).toBe('1');
    expect(first({ a: 1, b: 2 })).toBe(undefined);
});
