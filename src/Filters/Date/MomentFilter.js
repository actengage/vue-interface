import moment from 'moment';

export default function(value, format) {
    return value ? moment(String(value)) : null;
}
