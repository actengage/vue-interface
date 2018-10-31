import findKey from '../findKey';

test('findKey()', () => {
    const users = {
        'barney': { 'age': 36, 'active': true },
        'fred': { 'age': 40, 'active': false },
        'pebbles': { 'age': 1, 'active': true }
    };

    expect(findKey(users, o => o.age < 40)).toBe('barney');
    expect(findKey(users, { 'age': 1, 'active': true })).toBe('pebbles');
    expect(findKey(users, ['active', false])).toBe('fred');
    expect(findKey(users, 'active')).toBe('barney');
});
