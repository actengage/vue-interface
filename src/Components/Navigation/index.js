import Navigation from './Navigation';
import NavigationError from './NavigationError';
import NavigationItem from './NavigationItem';
import NavigationLink from './NavigationLink';
import NavigationDropdown from './NavigationDropdown';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Navigation,
            NavigationError,
            NavigationItem,
            NavigationLink,
            NavigationDropdown
        });
    }

});

export default Navigation;
