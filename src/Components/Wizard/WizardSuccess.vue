<template>
    <div>
        <i :class="icon"/>
        success
    </div>
</template>

<script>
import WizardStep from './WizardStep';

export default {

    name: 'wizard-success',

    extends: WizardStep,

    props: {

        icon: {
            type: String,
            default: 'fa fa-3x fa-check'
        }

    }

};
</script>
