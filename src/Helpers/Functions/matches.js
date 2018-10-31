import isObject from './isObject';

export default function matches(properties) {
    return subject => {
        for (const i in properties) {
            if (isObject(properties[i])) {
                return subject[i] ? matches(properties[i])(subject[i]) : false;
            }
            else if (!subject || subject[i] !== properties[i]) {
                return false;
            }
        }

        return true;
    };
}
