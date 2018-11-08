import moment from 'moment';

export default function(value, format) {
    if(value) {
        return moment(String(value)).format(format);
    }

    return '';
}
