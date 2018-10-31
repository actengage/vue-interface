import ActivityIndicator from './ActivityIndicator';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ActivityIndicator
        });
    }

});

export default ActivityIndicator;
