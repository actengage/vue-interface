import { each } from './Helpers/Functions';

import * as Components from './Components';
import * as Directives from './Directives';
import * as Filters from './Filters';
import * as Helpers from './Helpers';
import * as Http from './Http';
import * as Mixins from './Mixins';
import * as Plugins from './Plugins';

function install(Vue) {
    each(Components, (component, key) => {
        Vue.component(key, component);
    });

    each(Directives, (directive, key) => {
        Vue.directive(key, directive);
    });

    each(Filters, (filter, key) => {
        Vue.filter(key, filter);
    });

    each(Plugins, plugin => {
        Vue.use(plugin);
    });
}

if(window && window.Vue) {
    window.Vue.use(install);
}

export {
    Components,
    Directives,
    Filters,
    Helpers,
    Http,
    Mixins,
    Plugins
};