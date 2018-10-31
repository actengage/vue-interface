import isUndefined from '../isUndefined';

test('isUndefined()', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined('0')).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined('null')).toBe(false);
    expect(isUndefined({ a: 1, b: 2 })).toBe(false);
    expect(isUndefined([1, 2])).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
});
