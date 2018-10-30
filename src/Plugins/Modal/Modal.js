import { isObject } from '../../Helpers/Functions';
import { isFunction } from '../../Helpers/Functions';
import { deepExtend } from '../../Helpers/Functions';
import Modal from '../../Components/Modal';
import instantiate from '../../Helpers/Instantiate';

export default function(Vue, options) {

    Vue.prototype.$modal = function(Component, options) {
        if(!isObject(options)) {
            options = {};
        }

        const instance = instantiate(Vue, Modal, options.modal);

        instance.$content = instantiate(Vue, Component, options.content);
        instance.$slots.default = [instance.$content.$mount()._vnode];
        instance.$mount(
            document.body.appendChild(document.createElement('div'))
        );

        return instance;
    };

    Vue.prototype.$alert = function(title, Component, options) {
        return new Promise((resolve, reject) => {
            const modal = this.$modal(Component, deepExtend(options, {
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
            const modal = this.$modal(Component || title, deepExtend(options, {
                modal: {
                    propsData: {
                        title: Component ? title : null,
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

            const modal = this.$modal(Component, deepExtend(options, {
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
