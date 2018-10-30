import get from '../get';

test('get()', () => {
    const subject = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: [0, 1, 2]
        }
    };

    expect(get(subject, 'a')).toBe(1);
    expect(get(subject, 'c.d')).toBe(3);
    expect(get(subject, 'c.d.f')).toBe(undefined);
    expect(get(subject, 'c.f')).toBeInstanceOf(Array);
    expect(get(subject, 'c.f')).toHaveLength(3);
});
