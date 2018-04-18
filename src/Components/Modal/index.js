import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            Modal
        });
    }

});

export {
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalFooter,
    ModalHeader
}

export default Modal;
