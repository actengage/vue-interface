<template>
    <small class="form-text" :class="classes">
        <slot />
    </small>
</template>

<script>
import { extend } from '../../Helpers/Functions';
import Colorable from '../../Mixins/Colorable/Colorable';
import Screenreaders from '../../Mixins/Screenreaders/Screenreaders';

export default {

    name: 'HelpText',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};
</script>
