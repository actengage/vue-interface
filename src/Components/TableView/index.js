import TableView from './TableView';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            TableView
        });
    }

});

export default TableView;
