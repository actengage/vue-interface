import isNumeric from '../isNumeric';

test('isNumeric()', () => {
    expect(isNumeric(0)).toBe(true);
    expect(isNumeric('0')).toBe(true);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric('null')).toBe(false);
    expect(isNumeric({a: 1, b: 2})).toBe(false);
    expect(isNumeric([1, 2])).toBe(false);
    expect(isNumeric(() => {})).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(true)).toBe(false);
    expect(isNumeric(false)).toBe(false);
});
