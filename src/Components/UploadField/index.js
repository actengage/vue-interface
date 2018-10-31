import UploadField from './UploadField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            UploadField
        });
    }

});

export default UploadField;
