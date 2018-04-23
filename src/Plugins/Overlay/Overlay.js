import { isObject } from 'lodash-es';
import { isFunction } from 'lodash-es';
import Overlay from '../../Components/Overlay/Overlay';

export default function(Vue, options) {
    Vue.prototype.$overlay = function(ContentComponent, options, overlayOptions, CustomOverlayComponent) {
        const component = (vue, options) => {
            if(!(vue instanceof Vue) && isObject(vue)) {
                vue = Vue.extend(vue);
                vue.options.route = this.$route;
                vue.options.router = this.$router;
            }

            return isFunction(vue) ? new vue(options) : vue;
        }

        const overlay = component(CustomOverlayComponent || Overlay, overlayOptions);
        overlay.$content = component(ContentComponent, options);
        overlay.show(overlay.$content);
        return overlay;
    };
}
