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
                    <file-preview :file="file" :progress="progressBars[key] || 0" @loaded="onLoadedPreview" @close="removeFile(file)"/>
                    <slot :file="file"/>
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
import FormGroup from '../FormGroup';
import Model from '../../Http/Model';
import Dropzone from '../Dropzone/Dropzone';
import FormControl from '../../Mixins/FormControl/FormControl';
import FileField from '../FileField/FileField';
import FilePreview from '../FilePreview/FilePreview';
import ThumbnailList from '../ThumbnailList/ThumbnailList';
import ThumbnailListItem from '../ThumbnailList/ThumbnailListItem';
import { each, extend, remove, isArray, isUndefined } from '../../Helpers/Functions';

export default {

    name: 'upload-field',

    mixins: [FormControl],

    components: {
        Dropzone,
        FormGroup,
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
        },

        /**
         * An HTTP Model used to send the request
         *
         * @type Model
         */
        model: [Model, Function],

        request: Object

    },

    methods: {

        removeFile(data) {
            if (this.multiple) {
                const files = isArray(this.value) ? this.value.slice(0) : [];

                if (data instanceof File) {
                    if (data.request && data.request.cancel) {
                        data.request.cancel();
                    }

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
                if (data.request && data.request.cancel) {
                    data.request.cancel();
                }

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

            if (this.multiple) {
                const files = subject || (isArray(this.value) ? this.value.slice(0) : []);

                if ((!this.maxUploads || this.maxUploads > files.length) && files.indexOf(data) === -1) {
                    files.push(file);

                    this.$emit('change', files);
                    this.upload(file);
                }
            }
            else {
                this.$emit('change', file);
                this.upload(file);
            }
        },

        addFiles(files) {
            const subject = isArray(this.value) ? this.value.slice(0) : [];

            each(files, file => {
                this.addFile(file, subject);
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
            if (!this.model) {
                return Promise.resolve();
            }

            let model = this.model;

            if (!(this.model instanceof Model)) {
                const Model = this.model;

                model = new Model();
            }

            model.set(this.name, file);

            this.$emit('uploading', model);
            this.$set(this.progressBars, this.multiple ? (this.value ? this.value.length : 0) : 0, 0);

            return model.save(null, extend({
                onUploadProgress: e => {
                    if (!file.index) {
                        file.index = this.files.indexOf(file);
                    }

                    if (!file.request) {
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
            if (files instanceof FileList) {
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
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:over', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragEnter(event) {
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:enter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @type Object
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
        },

        /**
         * The `loaded` event callback.
         *
         * @type Object
         */
        onLoadedPreview(event) {
            this.$emit('loaded', event);
        }
    },

    computed: {

        files() {
            return this.multiple ? this.value : (this.value ? [this.value] : []);
        },

        showDropElement() {
            return !isUndefined(this.dragging) ? this.dragging : this.isDraggingInside;
        }

    },

    data() {
        return {
            progressBars: {},
            isDraggingInside: false
        };
    }

};
</script>

<style lang="scss">

.upload-field {
     .file-preview {
        min-width: 100px;
        min-height: 100px;

        .uploading .file-preview {
            opacity: .5;
        }
    }
}
</style>
