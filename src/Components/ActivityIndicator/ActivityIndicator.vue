<template>
    <div v-if="center" class="center-wrapper">
        <div class="center-content">
            <component :is="component" :size="size" :prefix="prefix"></component>
        </div>
    </div>
    <component v-else :is="component" :size="size"  :prefix="prefix"></component>
</template>

<script>
import { extend } from 'lodash';
import { kebabCase } from 'lodash';
import BaseType from './Types/BaseType';
import ActivityIndicatorDots from './Types/Dots';
import ActivityIndicatorSpinner from './Types/Spinner';

export default {

    name: 'activity-indicator',

    extends: BaseType,

    props: {

        center: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            default: 'dots'
        }

    },

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {
        component: function() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap-reboot.scss';

// ActivityIndicators Mixins

@mixin spinner-color($color) {

}

@keyframes activity-indicator-spinner {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
}

// Content Positioning Helpers
.center-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

</style>
