import FormGroup from './FormGroup';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormGroup
        });
    }

});

export default FormGroup;
