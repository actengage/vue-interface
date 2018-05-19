import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Popover,
            PopoverBody,
            PopoverHeader
        });
    }

});

export default Popover;
