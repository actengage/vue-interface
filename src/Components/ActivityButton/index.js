import ActivityButton from './ActivityButton';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ActivityButton
        })
    }

});

export default ActivityButton;
