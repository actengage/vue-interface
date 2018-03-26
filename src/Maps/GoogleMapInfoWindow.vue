<template>
    <div class="google-map-info-window" :class="{'activity': activity}">
        <activity-indicator v-if="activity" :center="true" size="sm" />
        <div v-else class="pt-1">
            <h3 v-if="name" class="header text-overflow" v-html="name" />
            <h3 v-else class="header text-overflow">Location</h3>

            <div v-if="loadingImagePreview || !loadingImagePreview && imagePreview" class="position-relative banner" :style="{backgroundImage: `url(${imagePreview})`}">
                <activity-indicator v-if="loadingImagePreview" size="sm" :center="true" />
            </div>

            <div class="d-flex align-content-center">
                <div v-if="icon"><img class="icon" :src="icon" :alt="name" /></div>
                <div>
                    <div v-if="address" class="address text-overflow" v-html="address"/>
                    <div v-if="phone" class="phone text-overflow"><a :href="`callto:${phone}`" v-html="phone"/></div>
                    <div v-if="email" class="email text-overflow"><a :href="`mailto${email}`" v-html="email"/></div>

                    <div class="pt-2" v-if="types">
                        <badge class="mr-1" color="primary" v-for="type in types" :key="type" :label="type" />
                    </div>

                    <div v-if="description" class="pt-3" v-html="description"/>
                </div>
            </div>

            <hr>

            <div class="pb-1 px-1">
                <a href="#" class="btn btn-sm btn-outline-primary" @click.prevent="onClickEdit"><i class="fa fa-edit"></i> Edit</a>
                <a href="#" class="btn btn-sm btn-outline-danger" @click.prevent="onClickDelete"><i class="fa fa-trash-o"></i> Delete</a>
            </div>
        </div>
    </div>
</template>

<script>

import { each } from 'lodash';
import Badge from '@/Toolbox/Components/Badge';
import readFile from '@/Toolbox/Helpers/ReadFile';
import ActivityIndicator from '@/Toolbox/ActivityIndicators/ActivityIndicator';

export default {

    name: 'google-map-info-window',

    components: {
        Badge,
        ActivityIndicator
    },

    watch: {
        image(value) {
            if(value instanceof File) {
                this.loadingImagePreview = true;

                readFile(value, e => {
                    // console.log('progress', e);
                })
                .then(e => {
                    this.loadingImagePreview = false;
                    this.imagePreview = e.target.result;
                });
            }
            else {
                console.log('image', value);
            }
        }
    },

    props: {

        /**
         * Show the activity indicator for the info window.
         *
         * @property string
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * An name for the info window.
         *
         * @property string
         */
        name: String,

        /**
         * An icon for the info window.
         *
         * @property string
         */
        icon: String,

        /**
         * An email for the info window.
         *
         * @property string
         */
        email: String,

        /**
         * An phone for the info window.
         *
         * @property string
         */
        phone: String,

        /**
         * An address for the info window.
         *
         * @property string
         */
        address: String,

        /**
         * An description for the info window.
         *
         * @property string
         */
        description: String,

        /**
         * An array of locality types for the info window.
         *
         * @property string
         */
        types: Array,

        /**
         * An vicinity for the info window.
         *
         * @property string
         */
        vicinity: String,

        /**
         * An vicinity for the info window.
         *
         * @property string
         */
        image: [Array, File, Object]

    },

    methods: {

        /**
         * The handler for the edit button.
         *
         * @property string
         */
        onClickEdit(event) {
            this.$emit('click:edit', event);
        },

        /**
         * The handler for the delete button.
         *
         * @property string
         */
        onClickDelete(event) {
            this.$emit('click:delete', event);
        }

    },

    data() {
        return {
            imagePreview: null,
            loadingImagePreview: null
        };
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
            font-size: $font-size-base * 1.25;
        }

        .banner {
            width: 100%;
            height: 125px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            margin-bottom: $font-size-base;
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
