import InputField from './InputField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            InputField
        });
    }

});

export default InputField;
