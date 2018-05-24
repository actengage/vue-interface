import { isObject } from 'lodash-es';
import { defaultsDeep } from 'lodash-es';
import instantiate from '../../Helpers/Instantiate';
import Overlay from '../../Components/Overlay';

export default function(Vue, options) {
    Vue.prototype.$overlay = function(target, Component, options) {
        if(!isObject(options)) {
            options = {};
        }

        if(!target.$overlay) {
            target.$overlay = instantiate(Vue, Overlay, defaultsDeep(options.overlay, {
                propsData: {
                    target: target
                }
            }));

            target.$overlay.$mount(
                document.body.appendChild(document.createElement('div'))
            );

            const content = instantiate(Vue, Component, options.content);

            target.$overlay.$slots.default = [content.$mount()._vnode];
            target.$overlay.$nextTick(() => {
                target.$overlay.open();
            });
        }

        return target.$overlay;
    };
}
