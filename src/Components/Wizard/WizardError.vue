<template>
    <div>
        <i :class="icon"/>
        error
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
        }

    }

};
</script>
