import HelpText from './HelpText';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            HelpText
        });
    }

});

export default HelpText;
