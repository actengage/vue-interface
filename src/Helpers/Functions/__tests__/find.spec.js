import find from '../find';

test('find() collection from object', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    const subject = find(collection, {
        a: 4,
        b: 5
    });

    expect(subject).toBeInstanceOf(Object);
    expect(subject.a).toBe(4);
});

test('find() collection from array', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    const subject = find(collection, ['a', 4]);

    expect(subject).toBeInstanceOf(Object);
    expect(subject.a).toBe(4);
});

test('find() collection from function', () => {
    const collection = [{
        a: 1, b: 2, c: 3
    }, {
        a: 4, b: 5, c: 6
    }];

    const subject = find(collection, object => {
        return object.a === 4;
    });

    expect(subject).toBeInstanceOf(Object);
    expect(subject.a).toBe(4);
});
