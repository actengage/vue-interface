import deepExtend from '../deepExtend';

test('deepExtend()', () => {
    const subject = deepExtend({
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
    expect(subject.c.e).toBe(4);
});
