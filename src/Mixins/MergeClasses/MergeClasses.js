import { each } from '../../Helpers/Functions';
import { extend } from '../../Helpers/Functions';
import { isArray } from '../../Helpers/Functions';
import { isObject } from '../../Helpers/Functions';

export default {

    methods: {

        mergeClasses() {
            const classes = {};

            each([].slice.call(arguments), arg => {
                if(isObject(arg)) {
                    extend(classes, arg);
                }
                else if(isArray(arg)) {
                    classes = classes.concat(arg);
                }
                else if(arg) {
                    classes[arg] = true;
                }
            });

            return classes;
        }

    }

}
