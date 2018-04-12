import DropdownMenu from './DropdownMenu';
import DropdownMenuDivider from './DropdownMenuDivider';
import DropdownMenuHeader from './DropdownMenuHeader';
import DropdownMenuItem from './DropdownMenuItem';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            DropdownMenu,
            DropdownMenuDivider,
            DropdownMenuHeader,
            DropdownMenuItem
        });
    }

});

export * from './DropdownMenuDivider';
export * from './DropdownMenuHeader';
export * from './DropdownMenuItem';
export default DropdownMenu;
