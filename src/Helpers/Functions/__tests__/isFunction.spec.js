import isFunction from '../isFunction';

test('isFunction()', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(0)).toBe(false);
    expect(isFunction('0')).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction('null')).toBe(false);
    expect(isFunction({ a: 1, b: 2 })).toBe(false);
    expect(isFunction([1, 2])).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
});
