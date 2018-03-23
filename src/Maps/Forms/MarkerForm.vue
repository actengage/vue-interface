<template>
    <overlay :visible.sync="isVisible">
        <form @submit.prevent="onSubmit">
            <h2>Edit Marker</h2>

            <input-field v-model="data.title" label="Title" size="lg"/>

            <input-field v-model="data.address" label="Address" size="lg"/>

            <input-field v-model="data.phone" label="Phone" size="lg"/>

            <input-field v-model="data.vicinity" label="Vicinity" size="lg"/>

            <textarea-field v-model="data.description" label="Description" size="lg" />

            <button type="submit" class="btn btn-lg btn-primary">Save Changes</button>
        </form>
    </overlay>
</template>

<script>

import { extend } from 'lodash';
import Overlay from '@/Toolbox/Components/Overlay';
import InputField from '@/Toolbox/Forms/InputField';
import TextareaField from '@/Toolbox/Forms/TextareaField';
import ActivityButton from '@/Toolbox/ActivityIndicators/ActivityButton';

export default {

    name: 'google-map-info-window',

    extends: Overlay,

    components: {
        Overlay,
        InputField,
        TextareaField,
        ActivityButton
    },

    props: {

        /**
         * The map symbol instance
         *
         * @property Object
         */
        symbol: {
            type: Object,
            required: true
        }

    },

    methods: {

        /**
         * The `handler for the `submit` event.
         *
         * @property string
         */
        onSubmit(event) {
            this.isVisible = false;
            this.onHide(event);
            this.$emit('submit', event, this.form);
        },

        /**
         * The `handler for the `hide` event.
         *
         * @property string
         */
        onHide(event) {
            setTimeout(() => {
                this.$emit('hide');
            }, 333);
        }

    },

    data() {
        return {
            isVisible: true,
            data: {
                title: this.symbol.$data.title || this.symbol.$infoWindow.$template.title,
                phone: this.symbol.$data.phone || this.symbol.$infoWindow.$template.phone,
                address: this.symbol.$data.address || this.symbol.$infoWindow.$template.address,
                vicinity: this.symbol.$data.vicinity || this.symbol.$infoWindow.$template.vicinity,
                description: this.symbol.$data.description || this.symbol.$infoWindow.$template.description
            }
        }
    }

}

</script>

<style lang="scss">

    .text-overflow {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .google-map-info-window {
        min-width: 150px;
        max-width: 350px;
        font-size: $font-size-base * .9;

        &.activity {
            min-height: 100px;
        }

        .header {
            font-size: $font-size-base * 1.5;
        }

        .address {
            width: 100%;
            max-width: 300px;
        }

        .icon {
            flex: 1;
            margin-right: $font-size-base * 1;
            width: 35px;
        }
    }
</style>
