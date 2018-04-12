import each from 'lodash-es/each';
import merge from 'lodash-es/merge';
import extend from 'lodash-es/extend';
import isArray from 'lodash-es/isArray';
import isObject from 'lodash-es/isObject';

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
