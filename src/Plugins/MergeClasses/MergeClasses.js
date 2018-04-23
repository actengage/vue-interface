import { each } from 'lodash-es';
import { merge } from 'lodash-es';
import { extend } from 'lodash-es';
import { isArray } from 'lodash-es';
import { isObject } from 'lodash-es';

export default function(Vue, options) {

    Vue.prototype.$mergeClasses = function() {
        const classes = {};

        each([].slice.call(arguments), arg => {
            if(isObject(arg)) {
                extend(classes, arg);
            }
            else if(isArray(arg)) {
                merge(classes, arg);
            }
            else if(arg) {
                classes[arg] = true;
            }
        });

        return classes;
    };

}
