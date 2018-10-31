import BtnActivity from './BtnActivity';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            BtnActivity
        });
    }

});

export default BtnActivity;
