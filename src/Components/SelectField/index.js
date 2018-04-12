import SelectField from './SelectField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            SelectField
        });
    }

});

export default SelectField;
