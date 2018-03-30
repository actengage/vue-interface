<template>

    <small class="form-text" :class="classes"><slot /></small>

</template>

<script>

import { extend } from 'lodash';
import Colorable from '@/Mixins/Colorable';
import Screenreaders from '@/Mixins/Screenreaders';

export default {

    name: 'help-text',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

}

</script>
