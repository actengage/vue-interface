<template>
    <base-form :data="data" :model="model" class="modal-content">
        <slot/>
    </base-form>
</template>

<script>
import BaseForm from '../BaseForm/BaseForm';

export default {

    name: 'modal-content',

    extends: BaseForm

}
</script>
