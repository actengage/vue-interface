<template>

    <div class="upload-field" :class="{'form-group': group, 'enable-dropzone': dropzone}" @dragenter.prevent="onDragEnter" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave">

        <file-field v-if="multiple && (!maxUploads || maxUploads > data.length) || !multiple && !data" :name="name" :label="label" :help-text="helpText" :multiple="multiple" :width="width" :height="height" :errors="errors" @change="multiple ? addFiles($event.target.files) : addFile($event.target.files[0])" />

        <div v-if="multiple" class="upload-field-preview mt-4">
            <file-preview v-for="(file, key) in data" :key="[file.name, file.lastModified, file.size].join('')" :file="file" @close="removeFile(file)"  />
        </div>

        <div v-else-if="!multiple && data" class="upload-field-preview mt-4">
            <file-preview :file="data" @close="removeFile(data)"  />
        </div>

        <div v-if="showDropElement" class="upload-field-dropzone" :style="{'min-height': dropzoneMinHeight}" @drop.prevent="onDrop">
            <i class="fa fa-cloud-upload"></i>
            <div>Drag and drop files to upload</div>
        </div>

    </div>

</template>

<script>

import { each } from 'lodash';
import { merge } from 'lodash';
import { remove } from 'lodash';
import { extend } from 'lodash';
import { findIndex } from 'lodash';
import { isUndefined } from 'lodash';
import BaseField from './BaseField';
import FileField from './FileField';
import FilePreview from './FilePreview';
import FormControl from '@/Toolbox/Mixins/FormControl';

 //

export default {

    name: 'upload-field',

    extends: BaseField,

    mixins: [FormControl],

    components: {
        FileField,
        FilePreview
    },

    /*
    directives: {
        bindEvents: {
            inserted(el, binding, vnode) {
                console.log(binding, vnode.context);
            }
        }
    },
    */

    model: {
        prop: 'data',
        event: 'change'
    },

    props: {

        /**
         * Is the user dragging a file over the dropzone
         *
         * @property String
         */
        dragging: {
            type: [String, Boolean],
            default() {
                return undefined;
            }
        },

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
         * The width attribute for the control element
         *
         * @property String
         */
        width: [Number, String],

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
         * Can user drag/drop files into browser to upload them.
         *
         * @property String
         */
        dropzoneMinHeight: [Number, String],

        /**
         * Can user upload multiple files
         *
         * @property String
         */
        multiple: {
            type: Boolean,
            default: false
        },

        /**
         * The data attribute
         *
         * @property File|FileList|Array
         */
        data: {
            type: [File, FileList, Array],
            default() {
                return !this.multiple ? null : [];
            }
        }

    },

    methods: {

        removeFile(data) {
            if(this.multiple) {
                const files = this.data.slice(0);

                remove(files, {
                    name: data.name,
                    size: data.size,
                    lastModified: data.lastModified
                });

                this.$emit('change', files);
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
            }

            if(this.multiple) {
                const files = subject || this.data.slice(0);

                if(!this.maxUploads || this.maxUploads > files.length) {
                    if(findIndex(files, data) === -1) {
                        files.push(file);
                    }

                    this.$emit('change', files);
                }
            }
            else {
                this.$emit('change', file)
            }
        },

        addFiles(files) {
            const subject = this.data.slice(0);

            each(files, file => {
                this.addFile(file, subject);
            });

            event.target.value = null;
        },

        /**
         * The `dragover` event callback.
         *
         * @property String
         */
        onDragOver(event) {
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:over', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @property String
         */
        onDragEnter(event) {
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:enter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @property String
         */
        onDragLeave(event) {
            this.isDraggingInside = false;
            this.$emit('update:dragging', false);
            this.$emit('drag:leave', event);
        },

        /**
         * The `drop` event callback.
         *
         * @property String
         */
        onDrop(event) {
            this.isDraggingInside = false;
            this.addFiles(event.dataTransfer.files);
            this.$emit('update:dragging', false);
            this.$emit('drop', event);
        }
    },

    computed: {
        showDropElement() {
            return !isUndefined(this.dragging) ? this.dragging : this.isDraggingInside
        }
    },

    data() {
        return {
            isDraggingInside: false
        };
    }

}

</script>

<style lang="scss">

.upload-field {

    &.enable-dropzone {
        position: relative;
    }

    &:not(.enable-dropzone) .upload-field-dropzone {
        position: fixed;
    }

    .upload-field-dropzone {
        color: $info;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: lighten($info, 45%);
        border: 2px dashed lighten($info, 25%);
        text-shadow: 0 1px 0 white;

        & > i {
            display: block;
            font-size: 32px;
        }
    }

    .upload-field-preview {
        display: flex;
        flex-wrap: wrap;
    }

    .upload-field-preview .file-preview:not(.is-image) {
        width: 150px;
    }

    .upload-field-preview .file-preview.is-image {
        width: 22.75%;
        margin-right: 3%;

        &:nth-child(4n) {
            margin-right: 0;
        }
    }

    .upload-field-preview .file-preview {
        display: inline-block;
    }

    .upload-field-preview .file-preview-name-label {
        max-width: 200px;
    }
}
</style>
