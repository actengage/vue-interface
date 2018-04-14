import BtnDropdown from './BtnDropdown';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BtnDropdown
        });
    }

});

export default BtnDropdown;
