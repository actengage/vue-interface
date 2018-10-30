import flatten from '../flatten';

test('flatten()', () => {
    const subject = flatten([1, [2, [3, [4]]]]);

    expect(subject).toHaveLength(3);
    expect(subject[0]).toBe(1);
    expect(subject[1]).toBe(2);
    expect(subject[2].toString()).toBe('3,4');
});
