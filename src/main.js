import { each } from 'lodash';
import * as filters from './Filters';
import * as plugins from './Plugins';
import * as components from './Components';
import VueInstaller from './Helpers/VueInstaller';

export * from './Http';
export * from './Mixins';
export * from './Plugins';
export * from './Components';
export * from './Filters';
export * from './Helpers';

export default VueInstaller.use({

    install(Vue) {

        if(process.env.NODE_ENV === 'development') {
            const domain = (location.host || 'localhost').split(':')[0];
            const port = process.env.LIVERELOAD_OPTIONS && process.env.LIVERELOAD_OPTIONS.port;
            VueInstaller.script(`http://${domain}:${port}/livereload.js?snipver=1`);
        }

        VueInstaller.plugins(Vue, plugins);
        VueInstaller.components(Vue, components);
        VueInstaller.filters(Vue, filters);
    }

});
