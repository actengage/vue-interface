import property from '../property';

test('property()', () => {
    const subject = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: [0, 1, 2]
        }
    };

    expect(property('a')(subject)).toBe(1);
    expect(property('a.b')(subject)).toBe(undefined);
    expect(property('c.d')(subject)).toBe(3);
});
