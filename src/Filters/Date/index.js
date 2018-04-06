import Date from './Date';

export {
    Date
};

export default function(Vue, options) {
    Vue.filter('date', Date);
};
