import { isObject } from 'lodash-es';
import { defaultsDeep } from 'lodash-es';
import instantiate from '../../Helpers/Instantiate';
import Popover from '../../Components/Popover';

export default function(Vue, options) {
    Vue.prototype.$popover = function(target, Component, options) {
        if(!isObject(options)) {
            options = {};
        }

        if(!target.$popover) {
            target.$popover = instantiate(Vue, Popover, defaultsDeep(options.popover, {
                propsData: {
                    show: true,
                    target: target,
                    content: instantiate(Vue, Component, options.content)
                }
            }));

            target.$popover.$mount(
                document.body.appendChild(document.createElement('div'))
            );
        }
    };
}
