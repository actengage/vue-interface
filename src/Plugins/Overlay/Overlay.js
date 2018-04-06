import { isObject } from 'lodash';
import { isFunction } from 'lodash';
import Overlay from '@/Components/Overlay/Overlay';

export default function(Vue, options) {

    function component(vue, options) {
        if(!(vue instanceof Vue) && isObject(vue)) {
            vue = Vue.extend(vue);
        }

        if(isFunction(vue)) {
            vue = new vue(options);
        }

        return vue;
    }

    Vue.prototype.$overlay = function(ContentComponent, options, overlayOptions, OverlayComponent) {
        const overlay = component(OverlayComponent || Overlay, overlayOptions);
        overlay.$content = component(ContentComponent, options);
        overlay.show(overlay.$content);
        return overlay;
    };

}
