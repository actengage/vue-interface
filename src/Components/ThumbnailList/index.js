import ThumbnailList from './ThumbnailList';
import ThumbnailListItem from './ThumbnailListItem';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ThumbnailList
        });
    }

});

export {
    ThumbnailListItem
};

export default ThumbnailList;
