import kebabCase from '../kebabCase';

test('kebabCase()', () => {
    expect(kebabCase('test case')).toBe('test-case');
    expect(kebabCase('Test Case')).toBe('test-case');
    expect(kebabCase('Test-Case')).toBe('test-case');
    expect(kebabCase('Test_Case')).toBe('test-case');
});
