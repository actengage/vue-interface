<template>
    <div
        class="modal"
        :class="triggerableClasses"
        :style="{display: isDisplaying ? 'block' : 'none'}"
        tabindex="-1"
        role="dialog"
        @keydown.esc="cancel">
        <slot name="backdrop">
            <modal-backdrop ref="backdrop" :show="isShowing" />
        </slot>
        
        <modal-dialog :class="{'modal-dialog-centered': center}">
            <modal-content>
                <slot name="header">
                    <modal-header v-if="title" @close="cancel">
                        {{ title }}
                    </modal-header>
                </slot>

                <slot name="body">
                    <component :is="!flush ? 'modal-body' : 'div'" class="child-component">
                        <slot />
                    </component>
                </slot>

                <slot name="footer">
                    <modal-footer v-if="type">
                        <template v-if="type === 'alert'">
                            <btn-activity :activity="activity" variant="primary" @click="confirm">
                                {{ okLabel }}
                            </btn-activity>
                        </template>
                        <template v-else>
                            <btn type="button" variant="secondary" @click="cancel" v-html="cancelLabel" />
                            <btn-activity :activity="activity" variant="primary" @click="confirm">
                                {{ okLabel }}
                            </btn-activity>
                        </template>
                    </modal-footer>
                </slot>
            </modal-content>
        </modal-dialog>
    </div>
</template>

<script>
import Btn from '../Btn';
import ModalBody from './ModalBody';
import ModalDialog from './ModalDialog';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import BtnActivity from '../BtnActivity';
import ModalContent from './ModalContent';
import ModalBackdrop from './ModalBackdrop';
import Triggerable from '../../Mixins/Triggerable';

export default {

    name: 'Modal',

    components: {
        Btn,
        BtnActivity,
        ModalBody,
        ModalBackdrop,
        ModalContent,
        ModalDialog,
        ModalHeader,
        ModalFooter
    },

    mixins: [
        Triggerable
    ],

    props: {

        /**
         * Show the modal activity indicator.
         *
         * @type {Boolean}
         */
        activity: Boolean,

        /**
         * Show the modal with a backdrop.
         *
         * @type {Boolean}
         */
        backdrop: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal centered in the screen.
         *
         * @type {Boolean}
         */
        center: Boolean,

        /**
         * Is the modal content fixed position
         *
         * @type {Boolean}
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal content flush with the modal edges? If true, no modal-body
         * will be used to wrap the content.
         *
         * @type {Boolean}
         */
        flush: Boolean,

        /**
         * The ok label text.
         *
         * @type {String}
         */
        okLabel: {
            type: String,
            default: 'Ok'
        },

        /**
         * The cancel label text.
         *
         * @type {String}
         */
        cancelLabel: {
            type: String,
            default: 'Cancel'
        },

        /**
         * The modal title.
         *
         * @type {String}
         */
        title: String,

        /**
         * Is the modal type.
         *
         * @type {Boolean}
         */
        type: {
            type: [Boolean, String],
            default: false,
            validate(value) {
                return ['alert', 'confirm', 'prompt'].indexOf(value) !== -1;
            }
        }

    },
    
    watch: {

        isShowing(value) {            
            document.querySelector('body').classList[value ? 'add' : 'remove']('modal-open');

            this.$emit('update:show', value);
        }

    },

    mounted() {
        if(this.show) {
            this.$nextTick(() => {
                this.initializeTarget();
                this.isDisplaying = true;

                setTimeout(() => {
                    this.isShowing = this.show;
                }, 50);
            });
        }
    },

    methods: {

        /**
         * Cancel the modal
         *
         * @return {void}
         */
        cancel(event) {
            this.$emit('cancel', event);
            this.close(event);
        },

        /**
         * Confirm the modal
         *
         * @return {void}
         */
        confirm(event) {
            this.$emit('confirm', event);
        },

        /**
         * A callback for the escape function.
         *
         * @return {void}
         */
        onEsc(event) {
            (this.type === 'confirm' || this.type === 'prompt') ? this.cancel(event) : this.close(event);
        }

    },

    beforeRouteLeave(to, from, next) {
        this.close();
    }

};
</script>

<style lang="scss">
.modal {
    .modal-backdrop + .modal-dialog {
        z-index: 1050;
    }
}
</style>
