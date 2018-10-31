import FileField from './FileField';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FileField
        });
    }

});

export default FileField;
