import axios from 'axios';
import moment from 'moment';
import { bind } from 'lodash';
import { each } from 'lodash';
import { extend } from 'lodash';
import { isObject } from 'lodash';
import { camelCase } from 'lodash';

export default class ResponseTransformer {

    constructor(response) {
        this.$response = response;
    }

}
