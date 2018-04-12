import InputGroup from './InputGroup';
import InputGroupAppend from './InputGroupAppend';
import InputGroupPrepend from './InputGroupPrepend';
import InputGroupText from './InputGroupText';
import VueInstaller from '../../Helpers/VueInstaller/VueInstaller';

const plugin = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            InputGroup,
            InputGroupAppend,
            InputGroupPrepend,
            InputGroupText
        });
    }

});

export * from './InputGroupAppend';
export * from './InputGroupPrepend';
export * from './InputGroupText';
export default InputGroup;
