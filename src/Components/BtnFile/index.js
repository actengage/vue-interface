import BtnFile from './BtnFile';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BtnFile
        });
    }

});

export default BtnFile;
