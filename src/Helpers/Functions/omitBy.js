import negate from './negate';
import pickBy from './pickBy';

export default function omitBy(object, fn) {
    return pickBy(object, negate(fn));
}
