import isNull from '../isNull';

test('isNull()', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull('null')).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('0')).toBe(false);
    expect(isNull({ a: 1, b: 2 })).toBe(false);
    expect(isNull([1, 2])).toBe(false);
    expect(isNull(() => {})).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
});
