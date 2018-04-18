<template>
    <div class="modal" tabindex="-1" role="dialog" :class="classes" :style="{display: show ? 'block' : 'none'}" @keydown.esc="type === 'confirm' || 'prompt' ? cancel() : close()">
        <modal-dialog>
            <modal-content>
                <slot name="header">
                    <modal-header @close="close()">{{title}}</modal-header>
                </slot>

                <modal-body>
                    <slot/>
                </modal-body>

                <slot name="footer">
                    <template v-if="type === 'alert'">
                        <modal-footer>
                            <activity-button :activity="activity" variant="primary" @click="close()">{{okLabel}}</activity-button>
                        </modal-footer>
                    </template>
                    <template v-else-if="type && type === 'confirm' || 'prompt'">
                        <modal-footer>
                            <btn type="button" variant="secondary" @click="cancel">{{cancelLabel}}</btn>
                            <activity-button :activity="activity" variant="primary" @click="confirm">{{okLabel}}</activity-button>
                        </modal-footer>
                    </template>
                </slot>
            </modal-content>
        </modal-dialog>
    </div>
</template>

<script>
import ModalBody from './ModalBody';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

export default {

    name: 'modal',

    components: {
        ModalBody,
        ModalContent,
        ModalDialog,
        ModalHeader,
        ModalFooter
    },

    watch: {

        show(value) {
            if(value) {
                this.$nextTick(() => {
                    this.focus();
                });
            }
        }

    },

    props: {

        /**
         * Show the modal activity indicator.
         *
         * @property Boolean
         */
        activity: Boolean,

        /**
         * Is the modal centered in the screen.
         *
         * @property Boolean
         */
        center: Boolean,

        /**
         * Is the modal content fluid
         *
         * @property Boolean
         */
        fluid: Boolean,

        /**
         * The modal title.
         *
         * @property String
         */
        title: String,

        /**
         * Is the modal showing.
         *
         * @property Boolean
         */
        show: Boolean,

        /**
         * Is the modal content fixed position
         *
         * @property Boolean
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * The ok label text.
         *
         * @property String
         */
        okLabel: {
            type: String,
            default: 'Ok'
        },

        /**
         * The cancel label text.
         *
         * @property String
         */
        cancelLabel: {
            type: String,
            default: 'Cancel'
        },

        /**
         * Is the modal type.
         *
         * @property Boolean
         */
        type: {
            type: [Boolean, String],
            default: false,
            validate(value) {
                return ['none', 'alert', 'confirm', 'prompt'].indexOf(value) !== -1;
            }
        }

    },

    computed: {

        classes() {
            return {
                'fade': this.fade,
                'show': this.show,
                'modal-dialog-centered': this.center
            }
        }

    },

    methods: {

        cancel(event) {
            this.close();
            this.$emit('cancel', event, this);
        },

        confirm(event) {
            this.$emit('confirm', event, this);
        },

        focus() {
            const el = this.$el.querySelector('.form-control, input, select, textarea');

            if(el) {
                el.focus();
            }
        },

        /**
         * Show the modal
         *
         * @return void
         */
        open(contents, options) {
            this.$mount(document.body.appendChild(document.createElement('div')));

            if(contents.$mount) {
                contents.$parent = this;
                contents.$mount(
                    this.$el.querySelector('.modal-content').appendChild(document.createElement('div'))
                );
            }

            this.focus();
            this.$emit('show');
            this.$emit('update:show', this.isShowing = true);
        },

        /**
         * Hide the modal
         *
         * @return void
         */
        close() {
            this.$emit('hide');
            this.$emit('update:show', this.isShowing = false);
        },

        /**
         * The callback for the `click` event on the close button.
         *
         * @return void
         */
        onClickClose() {
            this.$emit('click:close');
            this.close();
        }

    },

    mounted() {
        this.show && this.focus();

    },

    data() {
        return {
            isShowing: !!this.show
        }
    }

}

</script>
