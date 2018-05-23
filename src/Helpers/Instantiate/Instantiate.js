import { isObject } from 'lodash-es';

export default function instantiate(Vue, Component, options) {
    if(Component instanceof Vue) {
        return Component;
    }

    if(isObject(Component)) {
        Component = Vue.extend(Component);
    }

    return new Component(options);
}
