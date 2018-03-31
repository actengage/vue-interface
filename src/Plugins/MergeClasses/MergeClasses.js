import { each } from 'lodash';
import { size } from 'lodash';
import { merge } from 'lodash';
import { extend } from 'lodash';
import { isArray } from 'lodash';
import { isObject } from 'lodash';

export default function(Vue, options) {

    Vue.prototype.mergeClasses = function() {
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
