import camelCase from '../camelCase';

test('camelCase()', () => {
    expect(camelCase('test case')).toBe('testCase');
    expect(camelCase('Test Case')).toBe('testCase');
    expect(camelCase('test-case')).toBe('testCase');
    expect(camelCase('Test_Case')).toBe('testCase');
});
