import instantiate from '../../Helpers/Instantiate';
import Popover from '../../Components/Popover';
import { isObject, deepExtend } from '../../Helpers/Functions';

export default function(Vue, options) {
    Vue.prototype.$popover = function(target, Component, options) {
        if (!isObject(options)) {
            options = {};
        }

        if (!target.$popover) {
            target.$popover = instantiate(Vue, Popover, deepExtend(options.popover, {
                propsData: {
                    target: target
                }
            }));

            target.$popover.$mount(
                document.body.appendChild(document.createElement('div'))
            );

            const content = instantiate(Vue, Component, options.content);

            target.$popover.$slots.default = [content.$mount()._vnode];
            target.$popover.$nextTick(() => {
                target.$popover.open();
            });
        }

        return target.$popover;
    };
}
