import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImgTop from './CardImgTop';
import CardLink from './CardLink';
import CardSubtitle from './CardSubtitle';
import CardTitle from './CardTitle';
import VueInstaller from '@/Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Card,
            CardBody,
            CardFooter,
            CardHeader,
            CardImgTop,
            CardLink,
            CardSubtitle,
            CardTitle
        });
    }

});

export * from './CardBody';
export * from './CardFooter';
export * from './CardHeader';
export * from './CardImgTop';
export * from './CardLink';
export * from './CardSubtitle';
export * from './CardTitle';
export default Card;
