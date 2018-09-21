<template>
    <div v-if="center" class="center-wrapper" :class="{'position-relative': relative, 'position-fixed': fixed}" :style="style">
        <div class="center-content d-flex flex-column align-items-center">
            <component :is="component" :size="size" :prefix="prefix"/>
            <div v-if="label" v-html="label" class="activity-indicator-label"/>
        </div>
    </div>
    <div v-else class="d-flex flex-column justify-content-center align-items-center" :style="style">
        <component :is="component" :size="size" :prefix="prefix"/>
        <div v-if="label" v-html="label" class="activity-indicator-label"/>
    </div>
</template>

<script>
import { kebabCase } from 'lodash-es';
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

        label: String,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    methods: {

        unit(value) {
            return unit(value);
        }

    },

    computed: {

        style() {
            return {
                width: this.width,
                maxWidth: this.maxWidth,
                minWidth: this.minWidth,
                height: this.height,
                maxHeight: this.maxHeight,
                maxWidth: this.maxWidth
            }
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

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
