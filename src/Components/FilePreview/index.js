import FilePreview from './FilePreview';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FilePreview
        });
    }

});

export default FilePreview;
