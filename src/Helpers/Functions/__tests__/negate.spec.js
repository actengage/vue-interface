import negate from '../negate';

test('negate()', () => {
    expect((value => value == 1)(1)).toBe(true);
    expect(negate(value => value == 1)(2)).toBe(true);
    expect(negate(value => value == 1)(1)).toBe(false);
    expect(negate(value => value == 1)('1')).toBe(false);
});
