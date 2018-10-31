import ProgressBar from './ProgressBar';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ProgressBar
        });
    }

});

export default ProgressBar;
