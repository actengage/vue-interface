import ButtonDropdown from './ButtonDropdown';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ButtonDropdown
        });
    }

});

export default ButtonDropdown;
