import { isObject } from 'lodash-es';
import { isFunction } from 'lodash-es';
import { defaultsDeep } from 'lodash-es';
import instance from '../../Helpers/Instance';
import Popover from '../../Components/Popover';

export default function(Vue, options) {
    Vue.prototype.$popover = function(target, Component, options) {
        if(!isObject(options)) {
            options = {};
        }

        if(!target.$popover) {
            target.$popover = instance(Vue, Popover, defaultsDeep(options.popover, {
                propsData: {
                    show: true,
                    target: target,
                    content: instance(Vue, Component, options.content)
                }
            }));

            target.$popover.$mount(
                document.body.appendChild(document.createElement('div'))
            );
        }
    };
}
