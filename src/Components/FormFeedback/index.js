import FormFeedback from './FormFeedback';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormFeedback
        });
    }

});

export default FormFeedback;
