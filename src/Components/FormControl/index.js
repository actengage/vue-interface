import FormControl from './FormControl';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormControl
        });
    }

});

export default FormControl;
