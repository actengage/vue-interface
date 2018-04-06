import Alert from './Alert';
import AlertLink from './AlertLink';
import AlertClose from './AlertClose';
import AlertHeading from './AlertHeading';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Alert,
            AlertLink,
            AlertClose,
            AlertHeading
        });
    }

});

export * from './AlertLink';
export * from './AlertClose';
export * from './AlertHeading';
export default Alert;
