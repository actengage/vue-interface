import extend from './extend';
import isObject from './isObject';

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/
export default function deepExtend(target, ...sources) {
    if(!sources.length) return target;

    const source = sources.shift();

    if(isObject(target) && isObject(source)) {
        for(const key in source) {
            if(isObject(source[key])) {
                if(!target[key]) extend(target, { [key]: {} });
                deepExtend(target[key], source[key]);
            }
            else {
                extend(target, { [key]: source[key] });
            }
        }
    }

    return deepExtend(target, ...sources);
}
