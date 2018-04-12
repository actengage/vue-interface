import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import NavigationLink from './NavigationLink';
import NavigationDropdown from './NavigationDropdown';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Navigation,
            NavigationItem,
            NavigationLink,
            NavigationDropdown
        });
    }

});

export default Navigation;
