import isObject from '../isObject';

test('isObject()', () => {
    expect(isObject({a: 1, b: 2})).toBe(true);
    expect(isObject(0)).toBe(false);
    expect(isObject('0')).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject('null')).toBe(false);
    expect(isObject([1, 2])).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
});
