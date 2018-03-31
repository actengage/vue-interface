import RadioField from './RadioField';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            RadioField
        });
    }

});

export default RadioField;
