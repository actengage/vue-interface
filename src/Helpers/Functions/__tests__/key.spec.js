import key from '../key';

test('key()', () => {
    expect(key(0)).toBe(0);
    expect(key('0')).toBe(0);
    expect(key('a')).toBe('a');
    expect(key(0.5)).toBe(0.5);
    expect(key('0.5')).toBe(0.5);
});
