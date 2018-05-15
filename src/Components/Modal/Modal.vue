<template>

    <div>
        <modal-backdrop v-if="isShowing" :fade="fade" :show="show" @click.self="onEsc"/>

        <div class="modal" tabindex="-1" role="dialog" :style="styles" :class="classes" @keydown.esc="onEsc">

            <modal-dialog :class="{'modal-dialog-centered': center}">

                <modal-content>

                    <slot v-if="header" name="header">
                        <modal-header @close="cancel">{{title}}</modal-header>
                    </slot>

                    <component :is="!flush ? 'modal-body' : 'div'" class="child-component">
                        <slot/>
                    </component>

                    <slot name="footer" v-if="footer">
                        <template v-if="type === 'confirm' || type === 'prompt'">
                            <modal-footer>
                                <btn type="button" variant="secondary" @click="cancel">{{cancelLabel}}</btn>
                                <btn-activity :activity="activity" variant="primary" @click="confirm">{{okLabel}}</btn-activity>
                            </modal-footer>
                        </template>
                        <template v-else>
                            <modal-footer>
                                <btn-activity :activity="activity" variant="primary" @click="confirm">{{okLabel}}</btn-activity>
                            </modal-footer>
                        </template>
                    </slot>

                </modal-content>

            </modal-dialog>

        </div>

    </div>

</template>

<script>
import BtnActivity from '../BtnActivity';
import ModalBody from './ModalBody';
import ModalBackdrop from './ModalBackdrop';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import transition from '../../Helpers/Transition';

export default {

    name: 'modal',

    components: {
        BtnActivity,
        ModalBody,
        ModalBackdrop,
        ModalContent,
        ModalDialog,
        ModalHeader,
        ModalFooter
    },

    watch: {

        show(value) {
            this.isDisplaying = value;

            value && this.$nextTick(() => {
                this.focus();
            });
        },

        isShowing(value) {
            if(value) {
                document.querySelector('body').classList.add('modal-open');
            }
            else {
                document.querySelector('body').classList.remove('modal-open');
            }

            this.$emit('update:show', value);
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
         * Is the modal content flush with the modal edges? If true, no modal-body
         * will be used to wrap the content.
         *
         * @property Boolean
         */
        flush: Boolean,

        /**
         * Show the modal header
         *
         * @property Boolean
         */
        header: {
            type: Boolean,
            default: true
        },

        /**
         * The modal title.
         *
         * @property String
         */
        title: String,

        /**
         * Show the modal with a backdrop.
         *
         * @property Boolean
         */
        backdrop: {
            type: Boolean,
            default: true
        },

        /**
         * Hide the modal footer
         *
         * @property Boolean
         */
        footer: {
            type: Boolean,
            default: true
        },

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
         * Show the modal with a fade effect.
         *
         * @property Boolean
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal showing.
         *
         * @property Boolean
         */
        show: {
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

    methods: {

        /**
         * Confirm the modal
         *
         * @return void
         */
        confirm(event) {
            this.$emit('confirm', event, this);
        },

        /**
         * Focus on the first field in the modal (if exists).
         *
         * @return void
         */
        focus() {
            const el = this.$el.querySelector('.form-control, input, select, textarea');

            if(el) {
                el.focus();
            }
            else {
                this.$el.querySelector('.modal').focus();
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
                    this.$el.querySelector('.child-component').appendChild(document.createElement('div'))
                );
            }

            this.focus();
            this.$emit('open');
        },

        /**
         * Cancel the modal
         *
         * @return void
         */
        cancel(event) {
            this.$emit('cancel', event, this);
            this.close(event);
        },

        /**
         * Close the modal
         *
         * @return void
         */
        close(event) {
            return this.hide().then(delay => {
                this.isShowing = false;
                this.isDisplaying = false;
                this.$emit('close', event, this);
            });
        },

        /**
         * Hide the modal
         *
         * @return void
         */
        hide() {
            return (this.isShowing = false) || transition(this.$el.querySelector('.modal'));
        },

        /**
         * A callback for the escape function.
         *
         * @return void
         */
        onEsc(event) {
            (this.type === 'confirm' || this.type ===  'prompt') ? this.cancel(event) : this.close(event);
        }

    },

    computed: {

        classes() {
            return {
                'fade': this.fade,
                'show': this.isShowing
            };
        },

        styles() {
            return {
                display: this.isDisplaying ? 'block' : 'none'
            }
        }

    },

    mounted() {
        this.show && this.focus();

        this.$nextTick(() => {
            const form = this.$el.querySelector('form');

            if(form) {
                form.addEventListener('submit', event => {
                    event.preventDefault();
                    this.confirm(event);
                });
            }

            if(this.show) {
                this.$nextTick(() => {
                    this.isShowing = true;
                });
            }
        });
    },

    data() {
        return {
            isShowing: false,
            isDisplaying: this.show
        }
    },

    beforeRouteLeave(to, from, next) {
        modal.close();
    }

}

</script>
