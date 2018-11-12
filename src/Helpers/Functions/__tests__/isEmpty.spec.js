import isEmpty from '../isEmpty';

test('isEmpty()', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
});
