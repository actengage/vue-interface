import FileButton from './FileButton';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FileButton
        });
    }

});

export default FileButton;
