import Vue from 'vue';
import { each } from 'lodash';
import * as components from './Components';
import MergeClasses from '@/Plugins/MergeClasses';

Vue.config.productionTip = false;
Vue.use(MergeClasses);

each(components, (component, name) => {
    Vue.component(name, component);
});

export default Vue.extend();
