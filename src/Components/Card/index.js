import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImg from './CardImg';
import CardImgTop from './CardImgTop';
import CardImgBottom from './CardImgBottom';
import CardImgOverlay from './CardImgOverlay';
import CardLink from './CardLink';
import CardSubtitle from './CardSubtitle';
import CardTitle from './CardTitle';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Card,
            CardBody,
            CardFooter,
            CardHeader,
            CardImg,
            CardImgTop,
            CardImgBottom,
            CardImgOverlay,
            CardLink,
            CardSubtitle,
            CardTitle
        });
    }

});

export * from './CardBody';
export * from './CardFooter';
export * from './CardHeader';
export * from './CardImg';
export * from './CardImgTop';
export * from './CardImgBottom';
export * from './CardImgOverlay';
export * from './CardLink';
export * from './CardSubtitle';
export * from './CardTitle';
export default Card;
