import remove from '../remove';

test('remove()', () => {
    const array = remove([1, 2, 3, 4], value => {
        return value % 2 == 0
    });

    expect(array).toHaveLength(2);
    expect(array[0]).toBe(2);
    expect(array[1]).toBe(4);
});
