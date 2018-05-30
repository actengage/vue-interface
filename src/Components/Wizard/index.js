import Wizard from './Wizard';
import WizardButtons from './WizardButtons';
import WizardHeader from './WizardHeader';
import WizardProgress from './WizardProgress';
import WizardStep from './WizardStep';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Wizard,
            WizardButtons,
            WizardHeader,
            WizardProgress,
            WizardStep
        });
    }

});

export default Wizard;
