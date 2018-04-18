import defaultsDeep from 'lodash-es/extend';
import isString from 'lodash-es/isString';
import isObject from 'lodash-es/isObject';
import isFunction from 'lodash-es/isFunction';
import Modal from '../../Components/Modal/Modal';

function ensure(options, values) {
    if(!options) {
        options = {};
    }

    return {
        propsData: defaultsDeep(options.propsData || options, values || {})
    };
}

export default function(Vue, options) {
    function remove(modal) {
        modal.$destroy();
        modal.$el.remove();
    };

    function promise(modal) {
        const promise = new Promise((resolve, reject) => {
            let preventDefault = false;

            function finish(modal) {
                if(!preventDefault) {
                    modal.close();
                }
            }

            modal.preventDefault = function() {
                return preventDefault = true;
            };

            modal.$on('confirm', event => {
                promise.then(finish);
                resolve(modal);
            });

            modal.$on('cancel', event => {
                reject(modal);
            });
        });

        return promise;
    }

    Vue.prototype.$modal = function(title, content, options, modalOptions, ModalComponent) {
        if(isString(content)) {
            content = Vue.extend({
                template: `<div>${content}</div>`
            });
        }

        const component = (vue, options) => {
            if(!(vue instanceof Vue) && isObject(vue)) {
                vue = Vue.extend(vue);
                vue.options.route = this.$route;
                vue.options.router = this.$router;
            }

            return isFunction(vue) ? new vue(options) : vue;
        }

        const modal = component(ModalComponent || Modal, modalOptions);
        modal.$content = component(content, options);
        modal.open(modal.$content);

        modal.$on('cancel', event => {
            modal.$content.$emit('modal:cancel');
        });

        modal.$on('close', event => {
            modal.$content.$emit('modal:close');
        });

        modal.$on('confirm', event => {
            modal.$content.$emit('modal:confirm');
        });

        return modal;
    };

    Vue.prototype.$alert = function(title, content, options, modalOptions, ModalComponent) {
        return promise(this.$modal(
            title, content, options, ensure({type: 'alert', title: title}, modalOptions), ModalComponent
        ));
    };

    Vue.prototype.$confirm = function(title, content, options, modalOptions, ModalComponent) {
        return promise(this.$modal(
            title, content, options, ensure({type: 'confirm', title: title}, modalOptions), ModalComponent
        ));
    };

    Vue.prototype.$prompt = function(title, content, options, modalOptions, ModalComponent) {
        return promise(this.$modal(
            title, content, options, ensure({type: 'prompt', title: title}, modalOptions), ModalComponent
        ));
    };

}
