import * as filters from './Filters';
import * as plugins from './Plugins';
import * as components from './Components';
import * as directives from './Directives';
import VueInstaller from './Helpers/VueInstaller';

export * from './Http';
export * from './Mixins';
export * from './Helpers';
export * from './Plugins';
export * from './Components';
export * from './Directives';
export * from './Filters';

export default VueInstaller.use({

    install(Vue) {
        VueInstaller.plugins(Vue, plugins);
        VueInstaller.filters(Vue, filters);
        VueInstaller.directives(Vue, directives);
        VueInstaller.components(Vue, components);
    }

});
