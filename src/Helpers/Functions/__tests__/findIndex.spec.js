import findIndex from '../findIndex';

test('findIndex() collection from object', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    const index = findIndex(collection, {
        a: 4,
        b: 5
    });

    expect(index).toBe(1);
});

test('findIndex() collection from array', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    expect(findIndex(collection, ['a', 4])).toBe(1);
});

test('findIndex() collection from function', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    expect(findIndex(collection, object => {
        return object.a === 4;
    })).toBe(1);
});
