import BaseForm from './BaseForm';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BaseForm
        });
    }

});

export default BaseForm;
