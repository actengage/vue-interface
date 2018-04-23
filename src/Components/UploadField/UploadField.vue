<template>

    <form-group class="upload-field" :class="{'enable-dropzone': dropzone, 'enable-multiple': multiple}">

        <dropzone @drop="onDrop">

            <file-field
                v-if="multiple && (!maxUploads || maxUploads > value.length) || !multiple && !value"
                :name="name"
                :label="label"
                :placeholder="placeholder"
                :help-text="helpText"
                :multiple="multiple"
                :errors="errors"
                @change="onChange"
            />

            <thumbnail-list v-if="multiple && value && value.length" class="mt-4" wrap>
                <thumbnail-list-item
                    v-for="(file, key) in value"
                    :key="file.id || key"
                    :width="width"
                    :min-width="minWidth"
                    :max-width="maxWidth"
                    :height="height"
                    :min-height="minHeight"
                    :max-height="maxHeight">
                        <file-preview :file="file" @close="removeFile(file)"/>
                        <slot :file="file"/>
                <thumbnail-list-item>
            </thumbnail-list>

            <thumbnail-list v-else-if="!multiple && value" class="mt-4" wrap>
                <thumbnail-list-item
                    :width="width"
                    :min-width="minWidth"
                    :max-width="maxWidth"
                    :height="height"
                    :min-height="minHeight"
                    :max-height="maxHeight">
                        <file-preview :file="value" @close="removeFile(value)"/>
                        <slot :file="value"/>
                <thumbnail-list-item>
            </thumbnail-list>

            <div v-if="showDropElement" class="upload-field-dropzone" :style="{'min-height': dropzoneMinHeight}" @drop.prevent="onDrop">
                <i class="fa fa-cloud-upload"></i>
                <div>Drag and drop files to upload</div>
            </div>

        </dropzone>

    </form-group>

</template>

<script>
import each from 'lodash-es/each';
import remove from 'lodash-es/remove';
import isArray from 'lodash-es/isArray';
import findIndex from 'lodash-es/findIndex';
import Dropzone from '../Dropzone/Dropzone';
import isUndefined from 'lodash-es/isUndefined';
import FormControl from '../../Mixins/FormControl/FormControl';
import FileField from '../FileField/FileField';
import FilePreview from '../FilePreview/FilePreview';
import ThumbnailList from '../ThumbnailList/ThumbnailList';
import ThumbnailListItem from '../ThumbnailList/ThumbnailListItem';

export default {

    name: 'upload-field',

    mixins: [FormControl],

    components: {
        Dropzone,
        FileField,
        FilePreview,
        ThumbnailList,
        ThumbnailListItem
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

        onDrop(event) {
            this.onChange(event.dataTransfer.files);
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
