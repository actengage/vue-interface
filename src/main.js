import Vue from 'vue';
import ActivityButton from '@/ActivityIndicators/ActivityButton';
import ActivityIndicator from '@/ActivityIndicators/ActivityIndicator';

Vue.config.productionTip = false;

export default Vue.extend({
    components: {
        ActivityIndicator,
        ActivityButton
    }
});
