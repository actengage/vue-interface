import Overlay from './Overlay';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Overlay
        });
    }

});

export default Overlay;
