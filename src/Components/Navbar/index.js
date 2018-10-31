import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarNav from './NavbarNav';
import NavbarText from './NavbarText';
import NavbarToggler from './NavbarToggler';
import NavbarTogglerIcon from './NavbarTogglerIcon';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Navbar,
            NavbarBrand,
            NavbarCollapse,
            NavbarNav,
            NavbarText,
            NavbarToggler,
            NavbarTogglerIcon
        });
    }

});

export default Navbar;
