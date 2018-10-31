import { each, extend, isArray, isObject } from '../../Helpers/Functions';

export default {

    methods: {

        mergeClasses() {
            let classes = {};

            each([].slice.call(arguments), arg => {
                if (isObject(arg)) {
                    extend(classes, arg);
                }
                else if (isArray(arg)) {
                    classes = classes.concat(arg);
                }
                else if (arg) {
                    classes[arg] = true;
                }
            });

            return classes;
        }

    }

};
