import HelpText from './HelpText';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            HelpText
        });
    }

});

export default HelpText;
