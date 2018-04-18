import defaultsDeep from 'lodash-es/extend';
import isObject from 'lodash-es/isObject';
import isFunction from 'lodash-es/isFunction';
import Modal from '../../Components/Modal/Modal';

function ensureDefault(type, modalOptions) {
    if(!modalOptions) {
        modalOptions = {};
    }

    return {
        propsData: defaultsDeep(modalOptions.propsData, {
            type: type
        })
    };
}

export default function(Vue, options) {

    Vue.prototype.$modal = function(ContentComponent, options, modalOptions, ModalComponent) {
        const component = (vue, options) => {
            if(!(vue instanceof Vue) && isObject(vue)) {
                vue = Vue.extend(vue);
                vue.options.route = this.$route;
                vue.options.router = this.$router;
            }

            return isFunction(vue) ? new vue(options) : vue;
        }

        const modal = component(ModalComponent || Modal, modalOptions);
        modal.$content = component(ContentComponent, options);
        modal.open(modal.$content);

        const remove = function(event) {
            modal.$destroy();
            modal.$el.remove();
        };

        modal.$on('close', remove);
        modal.$on('confirm', remove);

        return modal;
    };

    Vue.prototype.$alert = function(ContentComponent, options, modalOptions, ModalComponent) {
        return new Promise((resolve, reject) => {
            const modal = this.$modal(
                ContentComponent, options, ensureDefault('alert', modalOptions), ModalComponent
            );

            modal.$on('confirm', event => {
                resolve(modal);
            });

            modal.$on('close', event => {
                resolve(modal);
            });
        });
    };

    Vue.prototype.$confirm = function(ContentComponent, options, modalOptions, ModalComponent) {
        return new Promise((resolve, reject) => {
            const modal = this.$modal(
                ContentComponent, options, ensureDefault('confirm', modalOptions), ModalComponent
            );

            modal.$on('confirm', event => {
                resolve(modal);
            });

            modal.$on('cancel', event => {
                reject(modal);
            });
        });
    };

    Vue.prototype.$prompt = function(ContentComponent, options, modalOptions, ModalComponent) {
        return new Promise((resolve, reject) => {
            console.log(modalOptions, ensureDefault('prompt', modalOptions));

            const modal = this.$modal(
                ContentComponent, options, ensureDefault('prompt', modalOptions), ModalComponent
            );

            modal.$on('confirm', event => {
                resolve(modal);
            });

            modal.$on('cancel', event => {
                reject(modal);
            });
        });
    };

}
