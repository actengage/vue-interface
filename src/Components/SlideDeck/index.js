import Slide from './Slide';
import SlideDeck from './SlideDeck';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Slide,
            SlideDeck
        });
    }

});

export default SlideDeck;
