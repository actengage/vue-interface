import BtnGroup from './BtnGroup';
import BtnToolbar from './BtnToolbar';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BtnGroup,
            BtnToolbar
        });
    }

});

export default BtnGroup;
