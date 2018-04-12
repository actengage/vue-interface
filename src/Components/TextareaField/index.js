import TextareaField from './TextareaField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            TextareaField
        });
    }

});

export default TextareaField;
