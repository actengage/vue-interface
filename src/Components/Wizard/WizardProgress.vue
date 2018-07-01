<template>
    <div class="wizard-progress">
        <a
            href="#"
            v-for="(step, i) in steps"
            class="wizard-step"
            :class="{'active': i === active, 'disabled': i > highestStep, 'complete': i + 1 <= highestStep}"
            :data-step="i"
            :title="step.label || step.title"
            :style="{width: `${100 / steps.length}%`}"
            @click.prevent="onClick($event, step)">
            <span v-if="step.componentOptions.propsData.label" class="wizard-step-label" v-html="step.componentOptions.propsData.label"/>
            <span v-else-if="step.componentOptions.propsData.title" class="wizard-step-label" v-html="step.componentOptions.propsData.title"/>
        </a>
    </div>
</template>

<script>
import { reduce } from 'lodash-es';

export default {

    name: 'wizard-progress',

    props: {

        /**
         * The index or key of the active step.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * The wizard highest available to the user.
         *
         * @type {Array}
         */
        highestStep: {
            type: Number,
            required: true,
        },

        /**
         * The wizard steps
         *
         * @type {Array}
         */
        steps: {
            type: Array,
            required: true
        }

    },

    watch: {
        steps(value) {
            console.log('steps changed');
        }
    },

    methods: {

        onClick(event, step) {
            console.log(step.componentInstance);

            if(!event.target.classList.contains('disabled')) {
                this.$emit('click', event, step);
            }
        }

    },

    data() {
        return {
            isActive: false
        }
    }

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.wizard-progress {
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    counter-reset: step;
}

/*
.wizard-progress-wrapper {
    width: 100%;
    padding: 30px 0;

    &:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
}
*/

.wizard-step {
    cursor: default;
    display: inline-block;
    list-style-type: none;
    font-size: $font-size-base;
    position: relative;
    text-align: center;
    text-transform: uppercase;

    &:before {
        width: 40px;
        height: 40px;
        content: counter(step);
        counter-increment: step;
        line-height: 36px;
        font-size: 15px;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: white;
        position: relative;
        z-index: 1;
        border: 2px solid #008cc0;
        color: #008cc0;
    }

    &:after {
        width: 100%;
        height: 2px;
        content: '';
        position: absolute;
        background-color: #7d7d7d;
        top: 20px;
        left: -50%;
    }

    &:first-child:after {
        content: none;
    }

    &, &:hover {
        color: #7d7d7d;
        text-decoration: none;

        &:not(.disabled) {
            cursor: pointer;
        }
    }

    .wizard-step-label {
       color: #008cc0;
    }

    &.disabled {
        cursor: default;

        &:before {
            color: #7d7d7d;
            border-color: #7d7d7d;
        }

        .wizard-step-label {
            color: #7d7d7d;
        }
    }

    &.complete {
        &:before {
            border-color: #55b776;
            color: #55b776;
        }

        &:before {
            font-family: FontAwesome;
            content: "\f00c";
            line-height: 40px;
        }

        & + .wizard-step:after {
            background-color: #55b776;
        }

        .wizard-step-label {
            color: #55b776;
        }
    }

    &.active {
        &:before {
            border-color: #b10805;
            color: #b10805;
        }

        .wizard-step-label {
            color: #b10805;
        }
    }

    .wizard:not(.wizard-finished) &.active:hover:before,
    .wizard:not(.wizard-finished) &.complete:hover:before {
        border-color: #b10805;
        color: #b10805;
    }

    .wizard:not(.wizard-finished) &.complete:hover + .wizard-step:after {
        background-color: #b10805;
    }
}

</style>
