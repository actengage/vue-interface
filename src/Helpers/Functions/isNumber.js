export default function isNumber(value) {
    return (typeof value === 'number') || (
        value && value.toString ? value.toString() === '[object Number]' : false
    );
}
