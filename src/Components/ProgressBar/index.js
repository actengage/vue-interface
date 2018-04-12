import ProgressBar from './ProgressBar';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ProgressBar
        });
    }

});

export default ProgressBar;
