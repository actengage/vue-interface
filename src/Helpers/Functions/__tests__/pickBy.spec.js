import pickBy from '../pickBy';
import isNumber from '../isNumber';

test('pickBy() isNumber', () => {
    const picked = pickBy({
        'a': 1,
        'b': '2',
        'c': 3
    }, isNumber);

    expect(picked.a).toBe(1);
    expect(picked.b).toBe(undefined);
    expect(picked.c).toBe(3);
});
