import isString from '../isString';

test('isString()', () => {
    expect(isString('0')).toBe(true);
    expect(isString(0)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString('null')).toBe(true);
    expect(isString({ a: 1, b: 2 })).toBe(false);
    expect(isString([1, 2])).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
});
