import { isObject, deepExtend } from '../../Helpers/Functions';
import instantiate from '../../Helpers/Instantiate';
import Overlay from '../../Components/Overlay';

export default function(Vue, options) {
    Vue.prototype.$overlay = function(target, Component, options) {
        if (!isObject(options)) {
            options = {};
        }

        if (!target.$overlay) {
            target.$overlay = instantiate(Vue, Overlay, deepExtend(options.overlay, {
                propsData: {
                    target: target
                }
            }));

            target.$overlay.$mount(
                document.body.appendChild(document.createElement('div'))
            );

            target.$overlay.$content = instantiate(Vue, Component, options.content);
            target.$overlay.$slots.default = [target.$overlay.$content.$mount()._vnode];
            target.$overlay.$nextTick(() => {
                target.$overlay.open();
            });
        }

        return target.$overlay;
    };
}
