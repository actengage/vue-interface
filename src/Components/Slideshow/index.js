import Slideshow from './Slideshow';
import SlideshowSlide from './SlideshowSlide';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Slideshow,
            SlideshowSlide
        });
    }

});

export default Slideshow;
