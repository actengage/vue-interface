<template>

    <div class="file-preview" :class="{'is-image': isImage}">

        <a v-if="!isImage || image" href="#" class="file-preview-close" @click.prevent="$emit('close', file)">
            <i class="fa fa-times-circle"></i>
        </a>

        <div v-if="isImage" class="file-preview-image">
            <img v-if="image" :src="image" class="file-preview-thumbnail">
            <progress-bar v-else v-ready="readFile" :progress="loaded" :height="10" />
        </div>

        <div v-else class="file-preview-icon">
            <i class="fa fa-file-o"></i>
        </div>

        <div class="file-preview-filename" v-html="name"></div>
        <div class="file-preview-filesize">({{size}})</div>
    </div>

</template>

<script>
import moment from 'moment';
import { isFunction } from 'lodash';
import ProgressBar from '@/Toolbox/ProgressBar/ProgressBar';

export default {

    name: 'file-preview',

    components: {
        ProgressBar
    },

    directives: {
        ready: {
            inserted(el, binding) {
                setTimeout(() => {
                    if(isFunction(binding.value)) {
                        binding.value();
                    }
                }, 50);
            }
        }
    },

    props: {

        /**
         * The uploaded File object
         *
         * @property Object
         */
        file: {
            type: File,
            required: true
        },

        /**
         * An array of mime types that should be used to determine if the
         * file is an image.
         *
         * @property Array
         */
        imageMimes: {
            type: Array,
            default() {
                return ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
            }
        }

    },

    computed: {

        /**
         * Get the file name
         *
         * @property String
         */
        name() {
            return this.file.name;
        },

        /**
         * Get the file extension
         *
         * @property String
         */
        extension() {
            return this.file.name.split('.').pop().toLowerCase();
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
            return this.file.type;
        },

        /**
         * If the file an image?
         *
         * @property String
         */
        isImage() {
            return this.imageMimes.indexOf(this.type) !== -1;
        },

        /**
         * Get the last time the file was modified (as timestamp)
         *
         * @property String
         */
        lastModified() {
            return this.file.lastModified;
        },

        /**
         * Get the last time the file was modified (as Date)
         *
         * @property String
         */
        lastModifiedDate() {
            return this.file.lastModifiedDate;
        }

    },

    methods: {
        readFile() {
            const start = moment();
            const reader = new FileReader;

            reader.onload = e => {
                setTimeout(() => {
                    this.image = e.target.result;
                }, 600 - moment().diff(start));
            };

            reader.onprogress = e => {
                if(e.lengthComputable) {
                    this.loaded = parseInt((e.loaded / e.total) * 100, 10);
                }
            };

            reader.readAsDataURL(this.file);
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
            image: null
        };
    }

}

</script>

<style lang="scss">

$file-preview-close-width: $font-size-base * 2;
$file-preview-close-height: $font-size-base * 2;

.file-preview {
    position: relative;

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
