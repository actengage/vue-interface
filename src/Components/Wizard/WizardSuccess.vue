<template>
    <div class="wizard-success">
        <div v-if="icon" class="wizard-success-icon">
            <font-awesome-icon :icon="icon" />
        </div>

        <h3 v-if="title" class="wizard-success-title" v-html="title" />

        <slot />
    </div>
</template>

<script>
import WizardStep from './WizardStep';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

library.add(faCheck);

export default {

    name: 'WizardSuccess',

    components: {
        FontAwesomeIcon
    },

    extends: WizardStep,

    props: {

        icon: {
            type: String,
            default: 'check'
        },

        title: {
            type: String,
            default: 'Success!'
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

$wizard-success-color: #55b776;

.wizard-success {
    text-align: center;
    font-size: $font-size-lg;
    padding: $font-size-lg * 4 $font-size-lg;

    .wizard-success-title {
        font-size: $font-size-lg * 1.5;
        color: $wizard-success-color;
    }

    .wizard-success-icon {
        color: $wizard-success-color;
        font-size: $font-size-lg * 2.5;
        border: 5px solid $wizard-success-color;
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
