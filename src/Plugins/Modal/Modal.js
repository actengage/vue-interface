import Modal from 'vue-interface/src/Components/Modal';
import instantiate from 'vue-interface/src/Helpers/Instantiate';
import { each, isObject, isFunction, deepExtend, isUndefined } from 'vue-interface/src/Helpers/Functions';

export class VueFactory {

    constructor(Vue, Component, args = {}) {
        this.Vue = Vue;
        this.$component = Component;
        this.$events = args.events || [];

        this.$options = deepExtend({
            propsData: args.props || {}
        }, args.options);
    }

    component(Component) {
        this.$component = Component;

        return this;
    }

    option(key, value) {
        if(isUndefined(value)) {
            return this.$options[key];
        }

        this.$options[key] = value;

        return this;
    }

    options(options) {
        if(isUndefined(options)) {
            return this.$options;
        }

        Object.assign(this.$options, options);

        return this;
    }

    prop(key, value) {
        if(isUndefined(value)) {
            return this.$options.propsData[key];
        }

        this.$options.propsData[key] = value;

        return this;
    }

    props(props) {
        if(isUndefined(props)) {
            return this.$options.propsData;
        }

        Object.assign(this.$options.propsData, props);

        return this;
    }

    on(key, fn) {
        this.$events.push({key, fn});

        return this;
    }

    instance() {
        return instantiate(this.Vue, this.$component, this.$options);
    }

    mount(el, fn) {
        const instance = this.instance();

        if(isFunction(fn)) {
            fn(instance);
        }
        
        instance.$mount(el);

        each(this.$events, ({ fn, key }) => {
            instance.$on(key, fn);
        });

        return instance;
    }

}

export class ModalFactory {
    
    constructor(Vue, Modal, Component) {
        this.modal = new VueFactory(Vue, Modal);
        this.content = new VueFactory(Vue, Component);
    }


    on(key, fn) {
        this.modal.on(key, fn);

        return this;
    }

    modal(fn) {
        fn && fn(this.modal);

        return this;
    }

    content(fn) {
        fn && fn(this.content);

        return this;
    }

    type(type) {
        this.modal.prop('type', type);

        return this;
    }

    title(title) {
        this.modal.prop('title', title);

        return this;
    }

    show(value) {
        if(isUndefined(value)) {
            value = this.modal.prop('show') || true;
        }
        
        this.modal.prop('show', !!value);

        return this;
    }

    hide(value) {
        this.modal.prop('show', !!value ? false : true);

        return this;
    }

    el() {
        return document.body.appendChild(document.createElement('div'));
    }

    mount() {
        const { _vnode } = this.content.mount();

        return this.modal.mount(this.el(), vue => {
            vue.$slots.default = [ _vnode ];
        });
    }

}

export default function(Vue) {
    
    Vue.prototype.$modal = function(title, Component, options = {}) {
        if(isFunction(title)) {
            Component = title;
            title = null;
        }

        const factory = new ModalFactory(Vue, Modal, Component)
            .title(title)
            .type(options.type)
            .show(isUndefined(options.show) || options.show || options.hide === false);

        if(isObject(options.events)) {
            for(let [event, fn] of Object.entries(options.events)) {
                factory.on(event, (...args) => {
                    fn(instance, ...args);
                });
            }
        }

        const instance = factory.mount();
        
        return instance;
    };

    Vue.prototype.$confirm = function(title, Component, options = {}) {
        return new Promise((resolve, reject) => {
            this.$modal(title, Component, deepExtend({
                type: 'confirm',
                events: {
                    cancel: () => {
                        reject(new Error('Confirmation aborted by user!'));
                    },
                    confirm: modal => {
                        resolve(modal.close());
                    }
                }
            }, options));
        });
    };

    Vue.prototype.$alert = function(title, Component, options) {
        return new Promise((resolve, reject) => {
            this.$modal(title, Component, deepExtend({
                type: 'alert',
                events: {
                    cancel: () => {
                        reject(new Error('Alert aborted by user!'));
                    },
                    confirm: modal => {
                        resolve(modal.close());
                    }
                }
            }, options));
        });
    };

    Vue.prototype.$prompt = function(title, Component, options, predicate) {
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

            this.$modal(title, Component, deepExtend({
                type: 'prompt',
                events: {
                    cancel: () => {
                        reject(new Error('Prompt aborted by user!'));
                    },
                    confirm: modal => {
                        const succeed = () => resolve(modal.close());
                        const fail = () => reject(modal.close());
        
                        if(predicate(modal, succeed, fail) === true) {
                            succeed();
                        }
                    }
                }
            }, options));
        });
    };
}
