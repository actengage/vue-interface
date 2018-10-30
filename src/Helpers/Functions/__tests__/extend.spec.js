import extend from '../extend';

test('extend()', () => {
    const subject = extend({
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
        }
    }, {
        a: 3,
        c: {
            d: 5
        }
    });

    expect(subject).toBeInstanceOf(Object);
    expect(subject.a).toBe(3);
    expect(subject.c.d).toBe(5);
    expect(subject.c.e).toBe(undefined);
});
