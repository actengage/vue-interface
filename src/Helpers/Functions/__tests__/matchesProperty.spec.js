import matchesProperty from '../matchesProperty';

test('matchesProperty()', () => {
    const subject = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: [0, 1, 2]
        }
    };

    expect(matchesProperty('a', 1)(subject)).toBe(true);
    expect(matchesProperty('b', 2)(subject)).toBe(true);
    expect(matchesProperty('c.d', 3)(subject)).toBe(true);
    expect(matchesProperty(['c', 'd'], 3)(subject)).toBe(true);
    expect(matchesProperty('b', 3)(subject)).toBe(false);
    expect(matchesProperty('c.d', 4)(subject)).toBe(false);
    expect(matchesProperty(['c', 'd'], 4)(subject)).toBe(false);
});
