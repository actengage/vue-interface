import wrap from '../wrap';

test('wrap()', () => {
    const toUpperCase = value => {
        return value.toUpperCase();
    };

    const p = wrap(toUpperCase, (func, text) => {
        return '<p>' + func(text) + '</p>';
    });

    expect(p('fred, barney, & pebbles')).toBe('<p>FRED, BARNEY, & PEBBLES</p>');
});
