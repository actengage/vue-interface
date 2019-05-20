<template>
    <div v-if="center" class="center-wrapper" :class="{'position-relative': relative, 'position-fixed': fixed}" :style="style">
        <div class="center-content d-flex flex-column align-items-center">
            <component :is="component" :size="size" :prefix="prefix" />
            <div v-if="label" class="activity-indicator-label" v-html="label" />
        </div>
    </div>
    <div v-else class="d-flex flex-column justify-content-center align-items-center" :style="style">
        <component :is="component" :size="size" :prefix="prefix" />
        
        <div v-if="label" class="activity-indicator-label" v-html="label" />
    </div>
</template>

<script>
import BaseType from './Types/BaseType';
import unit from '../../Helpers/Functions/unit';
import ActivityIndicatorDots from './Types/Dots';
import ActivityIndicatorSpinner from './Types/Spinner';
import kebabCase from '../../Helpers/Functions/kebabCase';

export default {

    name: 'ActivityIndicator',

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

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

    computed: {

        style() {
            return {
                width: unit(this.width),
                maxWidth: unit(this.maxWidth),
                minWidth: unit(this.minWidth),
                height: unit(this.height),
                maxHeight: unit(this.maxHeight),
                minHeight: unit(this.minHeight)
            };
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

};
</script>

<style lang="scss">
.center-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .center-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
