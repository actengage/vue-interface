<template>
    <div class="dropzone"
        :class="{'is-dragging': isDragging}"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragover"
        @dragenter.prevent="onDragenter"
        @dragleave.prevent="onDragleave">
        <slot name="placeholder">
            <div class="dropzone-placeholder text-center">
                <card>
                    <card-body>
                        <h1 class="mt-4">
                            Drag & Drop
                        </h1>
                        <p>Drag and drop your files here to upload them!</p>
                        <div class="mt-3">
                            <font-awesome-icon icon="image" />
                        </div>
                    </card-body>
                </card>
            </div>
        </slot>
        <slot />
    </div>
</template>

<script>
import Card from '../Card';
import CardBody from '../Card/CardBody';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';

library.add(faImage);

export default {

    name: 'Dropzone',

    components: {
        Card,
        CardBody,
        FontAwesomeIcon
    },

    data() {
        return {
            files: null,
            isDragging: false
        };
    },

    methods: {

        onDrop(event) {
            this.isDragging = false;
            this.$emit('drop', event);
        },

        onDragover(event) {
            this.isDragging = true;
            this.$emit('dragover', event);
        },

        onDragenter(event) {
            this.isDragging = true;
            this.$emit('dragenter', event);
            this.onDragover(event);
        },

        onDragleave(event) {
            this.isDragging = false;
            this.$emit('dragleave', event);
        }

    }

};
</script>

<style lang="scss">
.dropzone {
    position: relative;

    &.is-dragging .dropzone-placeholder {
        display: block;
    }

    & > .fa-image {
        font-size: 100px;
    }

    p {
        font-size: 18px;
    }

    .dropzone-placeholder {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: white;
    }
}
</style>
