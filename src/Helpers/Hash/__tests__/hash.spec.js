import hash from '../Hash';

test('that hash() hashes a string', () => {
    expect(hash('a')).toBe(3007);
    expect(hash('test')).toBe(1027142328);
    expect(typeof hash()).toBe('number');
});
