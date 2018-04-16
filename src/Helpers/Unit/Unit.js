import isNumeric from 'lodash-es/isFinite';

export default function(height) {
    return isFinite(height) ? height + 'px' : height;
}
