<template>
    <div class="wizard-error">
        <div v-if="icon" class="wizard-error-icon">
            <i :class="icon" size="3x" />
        </div>

        <h3 v-if="title" class="wizard-error-title" v-html="title" />

        <slot />

        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div v-if="errors" class="my-5">
                    <ul class="mb-0 text-left">
                        <li v-for="(error, i) in errors" :key="i">
                            {{ error[0] }}
                        </li>
                    </ul>
                </div>

                <btn size="lg" variant="danger" block @click="$emit('back')">
                    <font-awesome-icon icon="long-arrow-alt-left" /> Go Back
                </btn>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from '../Btn';
import WizardStep from './WizardStep';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons/faLongArrowAltLeft';

library.add(faCheck);
library.add(faLongArrowAltLeft);

export default {

    name: 'WizardError',

    components: {
        Btn,
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
    padding: $font-size-lg * 4 $font-size-lg;

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
