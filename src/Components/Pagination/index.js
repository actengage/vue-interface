import Pagination from './Pagination';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Pagination
        });
    }

});

export default Pagination;
