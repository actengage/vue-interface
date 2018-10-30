import isBoolean from '../isBoolean';

test('isBoolean()', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(() => {})).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('0')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean('null')).toBe(false);
    expect(isBoolean({a: 1, b: 2})).toBe(false);
    expect(isBoolean([1, 2])).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
});
