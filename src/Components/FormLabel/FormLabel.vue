<template>
    <label :class="classes">
        <slot />
    </label>
</template>

<script>
import { extend } from '../../Helpers/Functions';
import Colorable from '../../Mixins/Colorable/Colorable';
import Screenreaders from '../../Mixins/Screenreaders/Screenreaders';

export default {

    name: 'FormLabel',

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
