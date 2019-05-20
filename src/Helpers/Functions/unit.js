
export default function(value, defaultValue = 'px') {
    return isFinite(value) ? value + defaultValue : value;
}