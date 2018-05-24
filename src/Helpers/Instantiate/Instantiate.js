import { isObject } from 'lodash-es';
import { isString } from 'lodash-es';

export default function instantiate(Vue, Component, options) {
    if(Component instanceof Vue) {
        return Component;
    }

    if(isObject(Component)) {
        Component = Vue.extend(Component);
    }
    else if(isString(Component)) {
        const text = Component;

        Component = Vue.extend({

            functional: true,

            render(h, context) {
                return this._v(text);
            }

        });
    }

    return new Component(options);
}
