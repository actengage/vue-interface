<template>

    <div class="file-preview" :class="{'is-image': isImage}">

        <div class="file-preview-inner">

            <a v-if="!hideClose && (isImage || isVideo)" href="#" class="file-preview-close" @click.prevent="$emit('close', file)">
                <i class="fa fa-times-circle"></i>
            </a>

            <div v-if="isImage" class="file-preview-image">
                <img v-if="image" :src="image" class="file-preview-thumbnail">
                <progress-bar v-else v-ready="readFile" :value="loaded" :height="10" />
            </div>

            <div v-else v-ready="() => this.$emit('loaded')" class="file-preview-icon">
                <i class="fa" :class="{'fa-file-video-o': isVideo, 'fa-file-o': !isVideo}"></i>
            </div>

            <div class="file-preview-filename" v-html="name"></div>
            <div class="file-preview-filesize">({{size}})</div>

        <div>

    </div>

</template>

<script>
import moment from 'moment';
import { isFunction } from 'lodash-es';
import readFile from '../../Helpers/ReadFile/ReadFile';
import ProgressBar from '../ProgressBar';

export default {

    name: 'file-preview',

    components: {
        ProgressBar
    },

    directives: {
        ready: {
            inserted(el, binding, vnode) {
                vnode.context.$nextTick(binding.value);
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
            type: [Object, File],
            required: true
        }

    },

    computed: {

        /**
         * Get the file name
         *
         * @property String
         */
        name() {
            return this.file instanceof File ? this.file.name : this.file.orig_filename;
        },

        /**
         * Get the file extension
         *
         * @property String
         */
        extension() {
            return this.file instanceof File ? this.file.name.split('.').pop().toLowerCase() : this.file.extension;
        },

        /**
         * Get the file formatted size
         *
         * @property String
         */
        size() {
            return this.bytesToSize(this.file instanceof File ? this.file.size : this.file.bytes);
        },

        /**
         * Get the file type
         *
         * @property String
         */
        type() {
            return this.file instanceof File ? this.file.type : this.file.mime;
        },

        /**
         * Check to see if the file is an image.
         *
         * @property String
         */
        isImage() {
            return this.type.match(/^image\//);
        },

        /**
         * Check to see if the file is a video.
         *
         * @property String
         */
        isVideo() {
            return this.type.match(/^video\//);
        },

        /**
         * Get the last time the file was modified (as timestamp)
         *
         * @property String
         */
        lastModified() {
            return this.file instanceof File ? this.file.lastModified : null;
        },

        /**
         * Get the last time the file was modified (as Date)
         *
         * @property String
         */
        lastModifiedDate() {
            return this.file instanceof File ? this.file.lastModifiedDate : null;
        }

    },

    methods: {

        readFile() {
            if(this.file instanceof File) {
                const start = moment();

                readFile(this.file, e => {
                    if(e.lengthComputable) {
                        this.loaded = parseInt((e.loaded / e.total) * 100, 10);
                    }
                }).then(event => {
                    setTimeout(() => {
                        this.image = event.target.result;
                        this.$emit('read', event);
                        this.$emit('loaded');
                    }, 500 - moment().diff(start));
                }, error => {
                    this.$emit('error', error);
                });
            }
        },

    	bytesToSize: function(bytes) {
    		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    		if (bytes == 0) return '0 Byte';
    		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    	}

    },

    data() {
        return {
            loaded: 0,
            image: this.file.url
        };
    }

}

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
