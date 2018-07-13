import { isObject } from 'lodash-es';
import { isFunction } from 'lodash-es';
import { defaultsDeep } from 'lodash-es';
import Modal from '../../Components/Modal';
import instantiate from '../../Helpers/Instantiate';

export default function(Vue, options) {

    Vue.prototype.$modal = function(Component, options) {
        if(!isObject(options)) {
            options = {};
        }

        const instance = instantiate(Vue, Modal, options.modal).$mount(
            document.body.appendChild(document.createElement('div'))
        );

        instance.$content = instantiate(Vue, Component, options.content);
        instance.$slots.default = [instance.$content.$mount()._vnode];

        return instance;
    };

    Vue.prototype.$alert = function(title, Component, options) {
        return new Promise((resolve, reject) => {
            const modal = this.$modal(Component, defaultsDeep(options, {
                modal: {
                    propsData: {
                        title: title,
                        type: 'alert'
                    }
                }
            }));

            modal.$on('confirm', event => {
                modal.close();
            });

            modal.$on('close', event => {
                resolve(modal);
            });
        });
    };

    Vue.prototype.$confirm = function(title, Component, options) {
        return new Promise((resolve, reject) => {
            const modal = this.$modal(Component, defaultsDeep(options, {
                modal: {
                    propsData: {
                        title: title,
                        type: 'confirm'
                    }
                }
            }));

            modal.$on('cancel', event => {
                reject(modal);
            });

            modal.$on('confirm', event => {
                resolve(modal.close());
            });
        });
    };

    Vue.prototype.$prompt = function(title, Component, options, predicate) {
        return new Promise((resolve, reject) => {
            if(isFunction(options)) {
                predicate = options;
                options = {};
            }
            else if(isObject(options) && isFunction(options.predicate)) {
                predicate = options.predicate;
            }
            else if(!isFunction(predicate)) {
                predicate = () => true;
            }

            const modal = this.$modal(Component, defaultsDeep(options, {
                modal: {
                    propsData: {
                        title: title,
                        type: 'prompt'
                    }
                }
            }));

            modal.$on('cancel', event => {
                reject(modal);
            });

            modal.$on('confirm', event => {
                const succeed = () => resolve(modal.close());
                const fail = () => reject(modal.close());

                if(predicate(modal, succeed, fail) === true) {
                    success();
                }
            });
        });
    };

}
