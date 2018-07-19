<template>

    <div class="dropzone" :class="{'is-dragging': isDragging}" @drop.prevent="onDrop" @dragover.prevent="onDragover" @dragenter.prevent="onDragenter" @dragleave.prevent="onDragleave">
        <slot name="placeholder">
            <div class="dropzone-placeholder text-center">
                <card>
                    <card-body>
                        <h1 class="mt-4">Drag & Drop</h1>
                        <p>Drag and drop your files here to upload them!</p>
                        <div class="mt-3"><i class="fa fa-image"/></div>
                    </card-body>
                </card>
            </div>
        </slot>
        <slot/>
    </div>

</template>

<script>
import Card from '../Card';
import CardBody from '../Card/CardBody';

export default {

    name: 'dropzone',

    components: {
        Card,
        CardBody
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

    },

    data() {
        return {
            files: null,
            isDragging: false
        }
    }

}
</script>

<style lang="scss">
.dropzone {
    position: relative;

    p {
        font-size: 18px;
    }

    .fa-image {
        font-size: 100px;
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

    &.is-dragging .dropzone-placeholder {
        display: block;
    }
}
</style>
