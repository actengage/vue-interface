import ListGroup from './ListGroup';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ListGroup
        });
    }

});

export default ListGroup;
