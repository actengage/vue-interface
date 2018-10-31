import CheckboxField from './CheckboxField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            CheckboxField
        });
    }

});

export default CheckboxField;
