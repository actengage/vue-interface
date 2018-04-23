import { isFinite } from 'lodash-es';

export default function(height) {
    return isFinite(height) ? height + 'px' : height;
}
