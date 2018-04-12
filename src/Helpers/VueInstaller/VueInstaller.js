import each from 'lodash-es/each';
import script from '../Script';

const VueInstaller = {
    use,
    script,
    plugin,
    plugins,
    filter,
    filters,
    component,
    components,
    directive,
    directives,
    $plugins: {},
    $filters: {},
    $directives: {},
    $components: {},
};

export function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
    }

    return plugin;
}

export function plugin(Vue, name, def) {
    if(!VueInstaller.$plugins[name]) {
        Vue.use(VueInstaller.$plugins[name] = def);
    }
}

export function plugins(Vue, plugins) {
    each(plugins, (def, name) => {
        plugin(Vue, name, def);
    });
}

export function filter(Vue, name, def) {
    if(!VueInstaller.$filters[name]) {
        Vue.use(VueInstaller.$filters[name] = def);
    }
}

export function filters(Vue, filters) {
    each(filters, (def, name) => {
        filter(Vue, name, def);
    });
}

export function component(Vue, name, def) {
    if(!VueInstaller.$components[name]) {
        Vue.component(name, VueInstaller.$components[name] = def);
    }
}

export function components(Vue, components) {
    each(components, (def, name) => {
        component(Vue, name, def);
    });
}

export function directive(Vue, name, def) {
    if(!VueInstaller.$directives[name]) {
        Vue.directive(name, VueInstaller.$directives[name] = def);
    }
}

export function directives(Vue, directives) {
    each(directives, (def, name) => {
        directive(Vue, name, def);
    });
}

export default VueInstaller;
