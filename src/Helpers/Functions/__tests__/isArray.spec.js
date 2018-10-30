import isArray from '../isArray';

test('isArray()', () => {
    expect(isArray([1, 2])).toBe(true);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray('0')).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray('null')).toBe(false);
    expect(isArray({a: 1, b: 2})).toBe(false);
    expect(isArray(undefined)).toBe(false);
});
