<template>
    <div class="file-preview" :class="{'has-image': !!image}">
        <div class="file-preview-inner">
            <a v-if="!hideClose" href="#" class="file-preview-close" @click.prevent="$emit('close', file)">
                <font-awesome-icon icon="times-circle" />
            </a>

            <div v-if="!!poster || isImage" class="file-preview-image">
                <img v-if="!!poster || !!image" :src="poster || image" class="file-preview-thumbnail" @load="onLoad">
            </div>

            <div v-else v-ready="() => this.$emit('loaded')" class="file-preview-icon">
                <font-awesome-icon :icon="isVideo ? 'file-video' : 'file-alt'" />
            </div>

            <progress-bar
                v-if="progress || isImage && loaded !== false"
                v-ready="readFile"
                :value="progress || loaded || 0"
                :height="10"
                class="mt-3" />

            <div class="file-preview-filename" v-html="name" />
            <div class="file-preview-filesize">
                ({{ size }})
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import ProgressBar from '../ProgressBar';
import { isFunction } from '../../Helpers/Functions';
import readFile from '../../Helpers/ReadFile/ReadFile';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons/faFileVideo';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

library.add(faFileAlt);
library.add(faFileVideo);
library.add(faTimesCircle);

export default {

    name: 'FilePreview',

    components: {
        ProgressBar,
        FontAwesomeIcon
    },

    directives: {
        ready: {
            inserted(el, binding, vnode) {
                if(isFunction(binding.value)) {
                    vnode.context.$nextTick(binding.value);
                }
            }
        }
    },

    props: {

        /**
         * Hide the close button for the preview
         *
         * @property Object
         */
        hideClose: Boolean,

        /**
         * The uploaded File object
         *
         * @property Object
         */
        file: {
            type: [Object, Blob],
            required: true
        },

        /**
         * An image URL to instead of using the file reader.
         * @property {String}
         */
        poster: String,

        /**
         * Progress that can be passed from a parent comparent, for instance
         * use to show an ajax request with a single progress bar. If a progress
         * value is passed, even a 0, the progress bar will not be used to show
         * the progress of the file reader.
         * @property {Number}
         */
        progress: {
            type: Number,
            default: undefined
        }

    },

    data() {
        return {
            image: this.file.url,
            loaded: this.file instanceof Blob ? 0 : false
        };
    },

    computed: {

        /**
         * Get the file name
         *
         * @property String
         */
        name() {
            return this.file instanceof Blob ? this.file.name : this.file.orig_filename;
        },

        /**
         * Get the file extension
         *
         * @property String
         */
        extension() {
            return this.file instanceof Blob ? this.file.name.split('.').pop().toLowerCase() : this.file.extension;
        },

        /**
         * Get the file formatted size
         *
         * @property String
         */
        size() {
            return this.bytesToSize(this.file.size);
        },

        /**
         * Get the file type
         *
         * @property String
         */
        type() {
            return this.file instanceof Blob ? this.file.type : this.file.mime;
        },

        /**
         * Check to see if the file is an image.
         *
         * @property String
         */
        isImage() {
            return !!this.type.match(/^image/);
        },

        /**
         * Check to see if the file is a video.
         *
         * @property String
         */
        isVideo() {
            return !!this.type.match(/^video/);
        },

        /**
         * Get the last time the file was modified (as timestamp)
         *
         * @property String
         */
        lastModified() {
            return this.file instanceof Blob ? this.file.lastModified : null;
        },

        /**
         * Get the last time the file was modified (as Date)
         *
         * @property String
         */
        lastModifiedDate() {
            return this.file instanceof Blob ? this.file.lastModifiedDate : null;
        }

    },

    methods: {

        readFile() {
            if(this.file instanceof Blob) {
                const start = moment();

                this.loaded = 0;

                this.$nextTick(() => {
                    readFile(this.file, e => {
                        if(e.lengthComputable) {
                            this.$emit('progress', this.loaded = parseInt((e.loaded / e.total) * 100, 10));
                        }
                    }).then(event => {
                        this.$emit('read', event);

                        setTimeout(() => {
                            this.image = event.target.result;
                            this.$nextTick(() => {
                                this.loaded = false;
                            });
                        }, 500 - moment().diff(start));
                    }, error => {
                        this.$emit('error', error);
                    });
                });
            }
        },

        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if(bytes === 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        onLoad(event) {
            this.$emit('loaded');
        }

    }

};
</script>

<style lang="scss">
$file-preview-close-width: 1rem * 2;
$file-preview-close-height: 1rem * 2;

.file-preview {
    width: 100%;

    .file-preview-inner {
        position: relative;
    }

    .file-preview-close {
        top: 0;
        right: 0;
        padding: 0;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 100%;
        transform: translate(33%, -33%);

        i {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 24px;
            text-align: center;
        }
    }

    .file-preview-icon {
        text-align: center;
        font-size: 60px;
        padding: 1rem;
    }

    .file-preview-thumbnail {
        width: 100%;
        max-width: 100%;
    }

    .file-preview-filename {
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .file-preview-filename,
    .file-preview-filesize {
        text-align: center;
    }

}

</style>
