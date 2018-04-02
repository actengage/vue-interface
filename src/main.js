import { each } from 'lodash';
import * as plugins from './Plugins';
import * as components from './Components';
//import * as directives from './Directives';
import VueInstaller from './Helpers/VueInstaller';

export * from './Http';
export * from './Mixins';
export * from './Plugins';
export * from './Components';
//export * from './Directives';
export * from './Helpers';

export default VueInstaller.use({

    install(Vue) {
        VueInstaller.plugins(Vue, plugins);
        VueInstaller.components(Vue, components);
        //VueInstaller.directives(Vue, directives);
    }

});
