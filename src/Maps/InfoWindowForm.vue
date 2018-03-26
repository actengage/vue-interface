<template>
    <overlay :visible.sync="isVisible">
        <base-form @submit.prevent="onSubmit">
            <h2>Edit Marker</h2>

            <input-field v-model="data.name" label="Name" size="lg" :errors="errors" />

            <input-field v-model="data.icon" label="Icon" size="lg" :errors="errors" />

            <input-field v-model="data.address" label="Address" size="lg" :errors="errors" />

            <input-field v-model="data.phone" label="Phone" size="lg" :errors="errors" />

            <input-field v-model="data.vicinity" label="Vicinity" size="lg" :errors="errors" />

            <textarea-field v-model="data.description" label="Description" size="lg" :errors="errors" />

            <upload-field v-model="data.image" :data="data.image" label="Image" help-text="Accepted file types: .jpg, .gif, .png" :multiple="false" :errors="errors" />

            <button type="submit" class="btn btn-lg btn-primary">Save Changes</button>
        </base-form>
    </overlay>
</template>

<script>

import { extend } from 'lodash';
import BaseForm from '@/Toolbox/Forms/BaseForm';
import Overlay from '@/Toolbox/Components/Overlay';
import InputField from '@/Toolbox/Forms/InputField';
import UploadField from '@/Toolbox/Forms/UploadField';
import TextareaField from '@/Toolbox/Forms/TextareaField';
import ActivityButton from '@/Toolbox/ActivityIndicators/ActivityButton';

export default {

    name: 'google-map-info-window',

    extends: Overlay,

    components: {
        Overlay,
        BaseForm,
        InputField,
        UploadField,
        TextareaField,
        ActivityButton
    },

    props: {

        /**
         * The HTTP model used to save data when infowindow form is submitted.
         *
         * @property Object
         */
        model: {
            type: Object,
            validate(value) {
                return value instanceof Model;
            }
        },

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
            this.$emit('submit', event, this.data);
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
            errors: {},
            data: {
                image: this.symbol.$data.image || this.symbol.$infoWindow.$template.image,
                name: this.symbol.$data.name || this.symbol.$infoWindow.$template.name,
                icon: this.symbol.$data.icon || this.symbol.$infoWindow.$template.icon,
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
