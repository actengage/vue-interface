import isNumber from '../isNumber';

test('isNumber()', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber('0')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber('null')).toBe(false);
    expect(isNumber({ a: 1, b: 2 })).toBe(false);
    expect(isNumber([1, 2])).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
});
