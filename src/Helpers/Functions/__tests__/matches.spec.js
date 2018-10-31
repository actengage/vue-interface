import matches from '../matches';

test('matches()', () => {
    const subject = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: [0, 1, 2]
        }
    };

    expect(matches({ a: 1 })(subject)).toBe(true);
    expect(matches({ a: 1, b: 2 })(subject)).toBe(true);
    expect(matches({ c: { d: 3, e: 4 } })(subject)).toBe(true);
    expect(matches({ a: 2 })(subject)).toBe(false);
    expect(matches({ a: 2, b: 2 })(subject)).toBe(false);
    expect(matches({ d: {} })(subject)).toBe(false);
});
