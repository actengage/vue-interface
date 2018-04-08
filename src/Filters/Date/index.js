import DateFilter from './DateFilter';
import MomentFilter from './MomentFilter';

export {
    DateFilter,
    MomentFilter
};

export default function(Vue, options) {
    Vue.filter('date', DateFilter);
    Vue.filter('moment', MomentFilter);
};
