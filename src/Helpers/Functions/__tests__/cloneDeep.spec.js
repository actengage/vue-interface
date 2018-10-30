import cloneDeep from '../cloneDeep';

test('cloneDeep()', () => {
    const subject = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
        }
    };

    const cloned = cloneDeep(subject);

    expect(subject === cloned).toBe(false);
    expect(subject.c === cloned.c).toBe(false);
    expect(subject.c.d === cloned.c.d).toBe(true);
});
