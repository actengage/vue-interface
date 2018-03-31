import DropdownMenu from './DropdownMenu';
import DropdownMenuDivider from './DropdownMenuDivider';
import DropdownMenuHeader from './DropdownMenuHeader';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            DropdownMenu,
            DropdownMenuDivider,
            DropdownMenuHeader
        });
    }

});

export default DropdownMenu;
