<template>

    <form-group class="upload-field" :class="{'enable-dropzone': dropzone, 'enable-multiple': multiple}" @dragenter.prevent="onDragEnter" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave">

        <file-field
            v-if="multiple && (!maxUploads || maxUploads > value.length) || !multiple && !value"
            :name="name"
            :label="label"
            :placeholder="placeholder"
            :help-text="helpText"
            :multiple="multiple"
            :width="width"
            :height="height"
            :errors="errors"
            @change="onChange"
        />

        <div v-if="multiple && value && value.length" class="upload-field-preview mt-4">
            <file-preview v-for="(file, key) in value" :key="file.id || key" :file="file" @close="removeFile(file)"/>
        </div>

        <div v-else-if="!multiple && value" class="upload-field-preview mt-4">
            <file-preview :file="value" @close="removeFile(value)"/>
        </div>

        <div v-if="showDropElement" class="upload-field-dropzone" :style="{'min-height': dropzoneMinHeight}" @drop.prevent="onDrop">
            <i class="fa fa-cloud-upload"></i>
            <div>Drag and drop files to upload</div>
        </div>

    </form-group>

</template>

<script>
import { pull } from 'lodash';
import { each } from 'lodash';
import { merge } from 'lodash';
import { remove } from 'lodash';
import { extend } from 'lodash';
import { isArray } from 'lodash';
import { findIndex } from 'lodash';
import { isUndefined } from 'lodash';
import FormControl from '@/Mixins/FormControl/FormControl';
import FileField from '@/Components/FileField/FileField';
import FilePreview from '@/Components/FilePreview/FilePreview';

export default {

    name: 'upload-field',

    mixins: [FormControl],

    components: {
        FileField,
        FilePreview
    },

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
        dropzoneMinHeight: [Number, String],

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
        }

    },

    methods: {

        removeFile(data) {
            if(this.multiple) {
                const files = isArray(this.value) ? this.value.slice(0) : [];

                if(data instanceof File) {
                    remove(files, {
                        name: data.name,
                        size: data.size,
                        lastModified: data.lastModified
                    });
                }
                else {
                    remove(files, data);
                }

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
                const files = subject || (isArray(this.value) ? this.value.slice(0) : []);

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
            const subject = isArray(this.value) ? this.value.slice(0) : [];

            each(files, file => {
                this.addFile(file, subject);
            });

            event.target.value = null;
        },

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
@import './node_modules/bootstrap/scss/bootstrap-reboot.scss';

@mixin file-preview($total) {
    & .file-preview-inner {
        margin-right: 0;
    }

    &:nth-last-child(#{$total}) .file-preview-inner {
        margin-right: 1rem;
    }

    &:nth-last-child(#{$total}),
    &:nth-last-child(#{$total}) ~ .file-preview {
        width: 100% / $total;
    }
}

.upload-field {

    &.enable-dropzone {
        position: relative;
    }

    .file-preview {
        max-width: 300px;
    }

    &.enable-multiple .file-preview {

        &:first-child:nth-last-child(1) {
            width: 100%;
        }

        @include file-preview(2);
        @include file-preview(3);
        @include file-preview(4);
        @include file-preview(5);
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


    /*
    .upload-field-preview .file-preview.is-image {
        width: 22.75%;
        margin-right: 3%;

        &:nth-child(4n) {
            margin-right: 0;
        }
    }
    */

    .upload-field-preview .file-preview {
        display: inline-block;
    }

    .upload-field-preview .file-preview-name-label {
        max-width: 200px;
    }
}
</style>
