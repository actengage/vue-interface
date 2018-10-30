import deepFlatten from '../deepFlatten';

test('deepFlatten()', () => {
    const subject = deepFlatten([1, [2, [3, [4]]]]);

    expect(subject).toHaveLength(4);
    expect(subject.toString()).toBe('1,2,3,4');
});
