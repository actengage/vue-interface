import each from '../each';

test('each() on array', () => {
    let sum = 0;

    each([1, 2, 3, 4], value => {
        sum += value;
    });

    expect(sum).toBe(10);
});

test('each() on object', () => {
    let sum = 0;

    each({a: 1, b: 2, c: 3, d: 4}, value => {
        sum += value;
    });

    expect(sum).toBe(10);
});

test('each() on number', () => {
    let sum = 0;

    each(1, i => {
        sum += i;
    });

    expect(sum).toBe(0);
});

test('each() on string', () => {
    let sum = 0;

    each('string', i => {
        sum += 1;
    });

    expect(sum).toBe(6);
});
