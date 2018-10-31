import FormLabel from './FormLabel';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormLabel
        });
    }

});

export default FormLabel;
