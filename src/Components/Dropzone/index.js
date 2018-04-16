import Dropzone from './Dropzone';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Dropzone
        });
    }

});

export default Dropzone;
