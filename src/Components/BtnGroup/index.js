import BtnGroup from './BtnGroup.vue';
import BtnGroupToggle from './BtnGroupToggle';
import BtnToolbar from './BtnToolbar';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BtnGroup,
            BtnGroupToggle,
            BtnToolbar
        });
    }

});

export default BtnGroup;
