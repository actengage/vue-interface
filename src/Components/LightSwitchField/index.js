import LightSwitchField from './LightSwitchField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            LightSwitchField
        });
    }

});

export default LightSwitchField;
