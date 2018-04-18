<template>
    <div v-if="center" class="center-wrapper" :class="{'position-relative': relative, 'position-fixed': fixed}" :style="{minHeight: computedMinHeight}">
        <div class="center-content">
            <component :is="component" :size="size" :prefix="prefix"></component>
        </div>
    </div>
    <component v-else :is="component" :style="{minHeight: computedMinHeight}" :size="size" :prefix="prefix"></component>
</template>

<script>
import kebabCase from 'lodash-es/kebabCase';
import BaseType from './Types/BaseType';
import ActivityIndicatorDots from './Types/Dots';
import ActivityIndicatorSpinner from './Types/Spinner';
import unit from '../../Helpers/Unit';

export default {

    name: 'activity-indicator',

    extends: BaseType,

    props: {

        center: Boolean,

        fixed: Boolean,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        minHeight: [String, Number]

    },

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {

        computedMinHeight() {
            return unit(this.minHeight);
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap-reboot.scss';

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
