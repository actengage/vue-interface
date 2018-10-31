import compact from '../compact';

test('compact()', () => {
    expect(compact([0, 1, 2, null, undefined, ''])).toHaveLength(2);
});
