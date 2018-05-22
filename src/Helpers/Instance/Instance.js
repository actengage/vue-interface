import { isObject } from 'lodash-es';

/*
import { defaultsDeep } from 'lodash-es';

function ensure(options, values) {
    if(!options) {
        options = {};
    }

    return {
        propsData: defaultsDeep(options.propsData || options, values || {})
    };
}
*/

export default function instance(Vue, Component, options) {
    if(Component instanceof Vue) {
        return Component;
    }

    if(isObject(Component)) {
        Component = Vue.extend(Component);
    }

    return new Component(options);
}
