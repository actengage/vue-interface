<template>
    <div class="wizard-error">
        <div v-if="icon" class="wizard-error-icon">
            <i :class="icon"/>
        </div>

        <h3 v-if="title" class="wizard-error-title" v-html="title"/>

        <slot/>
    </div>
</template>

<script>
import WizardStep from './WizardStep';

export default {

    name: 'wizard-error',

    extends: WizardStep,

    props: {

        icon: {
            type: String,
            default: 'fa fa-3x fa-check'
        },

        title: {
            type: String,
            default: 'Error!'
        },

        errors: [Array, Object]

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

$wizard-error-color: #b10805;

.wizard-error {
    text-align: center;
    font-size: $font-size-lg;
    padding: $font-size-lg;

    .wizard-error-title {
        font-size: $font-size-lg * 1.5;
        color: $wizard-error-color;
    }

    .wizard-error-icon {
        color: $wizard-error-color;
        font-size: $font-size-lg;
        border: 5px solid $wizard-error-color;
        border-radius: 100%;
        text-align: center;
        width: $font-size-lg * 6;
        height: $font-size-lg * 6;
        margin: $font-size-lg auto;
        position: relative;

        i {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            line-height: 0;
        }
    }
}
</style>
