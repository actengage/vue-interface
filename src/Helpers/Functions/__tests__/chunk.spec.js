import chunk from '../chunk';

test('chunk() with maximum of 2 items', () => {
    const subject = chunk([1, 2, 3, 4, 5], 2);

    expect(subject).toHaveLength(3);
    expect(subject[0]).toHaveLength(2);
    expect(subject[1]).toHaveLength(2);
    expect(subject[2]).toHaveLength(1);
});

test('chunk() with maximum of 3 items', () => {
    const subject = chunk([1, 2, 3, 4, 5], 3);

    expect(subject).toHaveLength(2);
    expect(subject[0]).toHaveLength(3);
    expect(subject[1]).toHaveLength(2);
});

test('chunk() with maximum of 4 items', () => {
    const subject = chunk([1, 2, 3, 4, 5], 4);

    expect(subject).toHaveLength(2);
    expect(subject[0]).toHaveLength(4);
    expect(subject[1]).toHaveLength(1);
});
