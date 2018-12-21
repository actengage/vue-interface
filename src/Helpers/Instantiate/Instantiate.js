import { isObject, isString } from '../Functions';

export default function instantiate(Vue, Component, options) {
    if(Component instanceof Vue) {
        return Component;
    }

    if(isObject(Component)) {
        Component = Vue.extend(Component);
    }
    else if(isString(Component)) {
        Component = Vue.extend({
            functional: true,
            render(h, context) {
                return this._v(Component);
            }
        });
    }

    return new Component(options);
}
