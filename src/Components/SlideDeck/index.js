import Slides from './Slides';
import SlideDeck from './SlideDeck';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Slides,
            SlideDeck
        });
    }

});

export default SlideDeck;
