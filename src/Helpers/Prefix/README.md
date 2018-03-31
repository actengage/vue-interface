# prefix(subject, prefix, [delimiter = '-'])

Add a prefix to either a string or to keys' of an object.

@param  string|object  The subject that needs to be prefixed.
@param  string  The prefix string
@param  delimiter  The delimiting character that appends the prefix to the subject.
@return string|object

    prefix('red', 'bg')
    Returns: 'bg-red'


    prefix('red', 'bg', '_')
    Returns: 'bg_red'


    prefix({
        'red': true,
        'green': true,
        'blue': false
    }, 'bg')

    Returns:
    {
        "bg-red": true,
        "bg-blue": true,
        "bg-green": false
    }
