<template>
    <form-group :group="group" :class="mergeClasses(formGroupClasses, {'is-dragging': isDragging, 'enable-dropzone': dropzone, 'enable-multiple': multiple})">
        <dropzone @drop="onDrop" @dragover="onDragOver" @dragenter="onDragEnter" @dragleave="onDragLeave">
            <slot name="label">
                <form-label v-if="label || hasDefaultSlot" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
            </slot>

            <file-field
                v-if="multiple && (!maxUploads || maxUploads > value.length) || !multiple && !value"
                ref="field"
                v-bind="controlAttributes"
                :help-text="helpText"
                :value="value"
                @change="onChange" />

            <thumbnail-list v-if="files && files.length" class="mt-4" wrap>
                <thumbnail-list-item
                    v-for="(file, key) in files"
                    :key="file.lastModified + '-' + file.lastModifiedDate + '-' + file.size + '-' + file.type + '-' + file.name"
                    :width="width"
                    :min-width="minWidth"
                    :max-width="maxWidth"
                    :height="height"
                    :min-height="minHeight"
                    :max-height="maxHeight"
                    :class="{'uploading': !!progressBars[key]}">
                    <file-preview :file="file" :progress="progressBars[key] || 0" @loaded="onLoadedPreview" @close="removeFile(file)" />
                    <slot :file="file" />
                </thumbnail-list-item>
            </thumbnail-list>

            <slot name="feedback">
                <form-feedback v-if="validFeedback" ref="feedback" valid v-html="validFeedback" />
                <form-feedback v-else-if="invalidFeedback" ref="feedback" invalid v-html="invalidFeedback" />
            </slot>

            <div v-if="isDragging" class="upload-field-dropzone" :style="{'min-height': dropzoneMinHeight}" @drop.prevent="onDrop">
                <font-awesome-icon icon="cloud-upload-alt" />
                <div>Drag and drop files to upload</div>
            </div>
        </dropzone>
    </form-group>
</template>

<script>
import Dropzone from '../Dropzone';
import FormGroup from '../FormGroup';
import FileField from '../FileField';
import FormLabel from '../FormLabel';
import Model from '../../Http/Model';
import FilePreview from '../FilePreview';
import ThumbnailList from '../ThumbnailList';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ThumbnailListItem from '../ThumbnailList/ThumbnailListItem';
import { each, extend, remove, isArray, isUndefined } from '../../Helpers/Functions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';

library.add(faCloudUploadAlt);

export default {

    name: 'UploadField',

    components: {
        Dropzone,
        FormGroup,
        FileField,
        FormLabel,
        FilePreview,
        ThumbnailList,
        FontAwesomeIcon,
        ThumbnailListItem
    },

    mixins: [
        FormControl,
        MergeClasses
    ],

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {

        /**
         * Can user upload multiple files
         *
         * @property String
         */
        multiple: Boolean,

        /**
         * The maximum number of files that a user can upload
         *
         * @property String
         */
        maxUploads: Number,

        /**
         * The height attribute for the control element
         *
         * @property String
         */
        height: [Number, String],

        /**
         * The minimum height attribute for the control element
         *
         * @property String
         */
        minHeight: [Number, String],

        /**
         * The maximum height attribute for the control element
         *
         * @property String
         */
        maxHeight: [Number, String],

        /**
         * The width attribute for the control element
         *
         * @property String
         */
        width: [Number, String],

        /**
         * The minimum width attribute for the control element
         *
         * @property String
         */
        minWidth: [Number, String],

        /**
         * The maximum width attribute for the control element
         *
         * @property String
         */
        maxWidth: [Number, String],

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @property String
         */
        dropzoneMinHeight: [Number, String],

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @property String
         */
        dropzone: {
            type: Boolean,
            default: true
        },

        /**
         * The data attribute
         *
         * @property File|FileList|Array
         */
        value: {
            type: [Object, File, FileList, Array],
            default() {
                return !this.multiple ? null : [];
            }
        },

        /**
         * An HTTP Model used to send the request
         *
         * @type Model
         */
        model: [Model, Function],

        request: Object

    },

    data() {
        return {
            progressBars: {},
            isDragging: false,
            files: !this.value ? [] : (this.multiple ? Array.from(this.value) : [this.value])
        };
    },

    computed: {

        showDropElement() {
            return this.isDragging;
        }

    },

    methods: {

        removeFile(data) {
            this.files.splice(this.files.indexOf(data), 1);

            if(data.request && data.request.cancel) {
                data.request.cancel();
            }

            if(this.multiple) {
                this.$emit('change', this.files);
            }
            else {
                this.$emit('change', null);
            }
        },

        addFile(file, subject) {
            const data = {
                name: file.name,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                size: file.size,
                type: file.type
            };

            if(this.multiple) {
                if((!this.maxUploads || this.maxUploads > this.files.length) && this.files.indexOf(data) === -1) {
                    this.files.splice(this.files.length, 0, file);
                    this.$emit('change', this.files);
                    this.upload(file);
                }
            }
            else {
                this.files = [file];
                this.$emit('change', file);
                this.upload(file);
            }
        },

        addFiles(files) {
            Array.from(files).forEach(file => {
                this.addFile(file);
            });

            event.target.value = null;
        },

        /**
         * Upload function that handles auto-uploading fields asynchronously.
         * This is designed to work with REST API's and replace the file Object
         * with the RESTful returned by the server.
         *
         * @type Object
         */
        upload(file) {
            // Stop upload silently if no model is defined.
            if(!this.model) {
                return Promise.resolve();
            }

            let model = this.model;

            if(!(this.model instanceof Model)) {
                const Model = this.model;

                model = new Model();
            }

            if(this.$attrs.name) {
                model.set(this.$attrs.name, file);
            }

            this.$emit('uploading', model);
            this.$set(this.progressBars, this.multiple ? (this.value ? this.value.length : 0) : 0, 0);

            return model.save(null, extend({
                onUploadProgress: e => {
                    if(!file.index) {
                        file.index = this.files.indexOf(file);
                    }

                    if(!file.request) {
                        file.request = model.getRequest();
                    }

                    this.$set(this.progressBars, file.index, parseInt((e.loaded / e.total) * 100, 10));
                    this.$emit('progress', model, this.progressBars[file.index]);
                }
            }, this.request))
                .then(response => {
                    this.$nextTick(() => {
                        this.$emit('upload', model);
                        this.progressBars[file.index] = false;
                    });

                    return response;
                });
        },

        /**
         * The `change` event callback.
         *
         * @type Object
         */
        onChange(files) {
            if(files instanceof FileList) {
                this.addFiles(files);
            }
            else {
                this.addFile(files);
            }
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragOver(event) {
            this.isDragging = true;
            this.$emit('drag-over', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragEnter(event) {
            console.log('onDragEnter');

            this.isDragging = true;
            this.$emit('drag-enter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @type Object
         */
        onDragLeave(event) {
            console.log('onDragEnter');

            this.isDragging = false;
            this.$emit('drag-leave', event);
        },

        /**
         * The `drop` event callback.
         *
         * @property String
         */
        onDrop(event) {
            this.isDragging = false;
            this.addFiles(event.dataTransfer.files);
            this.$emit('update:dragging', false);
            this.$emit('drop', event);
        },

        /**
         * The `loaded` event callback.
         *
         * @type Object
         */
        onLoadedPreview(event) {
            this.$emit('loaded', event);
        }
    }

};
</script>

<style lang="scss">

.upload-field {
    &.is-dragging, .is-dragging {
        position: static;
    }

    .form-group.form-control {
        height: auto;
        border: 0;
        padding: 0;
    }
    
    .file-preview {
        min-width: 100px;
        min-height: 100px;

        .uploading .file-preview {
            opacity: .5;
        }
    }
}
</style>
