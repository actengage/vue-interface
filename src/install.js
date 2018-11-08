import { each } from './Helpers/Functions';
import * as components from './Components';
import * as directives from './Directives';
import * as plugins from './Plugins';

const Vue = window.Vue;

if(!Vue) {
    throw Error(`
        Vue must be installed before you can install Vue Interface. Be sure to
        include the following before install.js script tag:

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    `);
}

each(components, (component, key) => {
    Vue.component(key, component);
});

each(directives, (directive, key) => {
    Vue.directive(key, directive);
});

each(plugins, plugin => {
    Vue.use(plugin);
});
