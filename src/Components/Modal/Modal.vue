<template>

    <div class="modal" :class="classes" :style="{display: isDisplaying ? 'block' : 'none'}" tabindex="-1" role="dialog" @keydown.esc="onEsc">

        <modal-dialog :class="{'modal-dialog-centered': center}">

            <modal-content>

                <slot name="header">
                    <modal-header v-if="title" @close="cancel">{{title}}</modal-header>
                </slot>

                <slot name="body">
                    <component :is="!flush ? 'modal-body' : 'div'" class="child-component">
                        <slot/>
                    </component>
                </slot>

                <slot name="footer">
                    <modal-footer v-if="type">
                        <template v-if="type === 'alert'">
                            <btn-activity :activity="activity" variant="primary" @click="confirm" v-html="okLabel"/>
                        </template>
                        <template v-else>
                            <btn type="button" variant="secondary" @click="cancel" v-html="cancelLabel"/>
                            <btn-activity :activity="activity" variant="primary" @click="confirm" v-html="okLabel"/>
                        </template>
                    </modal-footer>
                </slot>

            </modal-content>

        </modal-dialog>

    </div>

</template>

<script>
import { each } from 'lodash-es';
import { isString } from 'lodash-es';
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

        isShowing(value) {
            if(value) {
                document.querySelector('body').classList.add('modal-open');

                if(this.backdrop && !document.querySelector('.modal-backdrop')) {
                    this.backdropComponent = new (Vue.extend(ModalBackdrop))().$mount(
                        document.body.appendChild(document.createElement('div'))
                    );
                }
            }
            else {
                document.querySelector('body').classList.remove('modal-open');

                if(this.backdropComponent) {
                    this.backdropComponent.$destroy();
                    this.backdropComponent.$el.remove();
                    this.backdropComponent = null;
                }
            }

            this.$emit('update:show', value);
        }

    },

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
            default: true,
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
         * Show the modal with a fade effect.
         *
         * @type {Boolean}
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal content fluid
         *
         * @type {Boolean}
         */
        fluid: Boolean,

        /**
         * Is the modal content flush with the modal edges? If true, no modal-body
         * will be used to wrap the content.
         *
         * @type {Boolean}
         */
        flush: Boolean,

        /**
         * Show the modal header
         *
         * @type {Boolean}
         */
        header: {
            type: Boolean,
            default: true
        },

        /**
         * Hide the modal footer
         *
         * @type {Boolean}
         */
        /*
        footer: {
            type: Boolean,
            default: true
        },
        */

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
         * Is the modal showing.
         *
         * @type {Boolean}
         */
        show: {
            type: Boolean,
            default: false
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
        },

        /**
         * The target element used to position the popover.
         *
         * @type {String|Element|Boolean}
         */
        target: {
            type: [String, Element, Boolean],
            default: false
        },

        /**
         * How the modal is triggered - click | hover | focus | manual. You may
         * pass multiple triggers; separate them with a space. `manual` cannot
         * be combined with any other trigger.
         *
         * @type {String}
         */
        trigger: {
            type: [String, Array],
            default: 'click'
        }

    },

    computed: {

        classes() {
            return {
                'fade': this.fade,
                'show': this.isShowing
            };
        }

    },

    methods: {

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
            transition(this.$el).then(delay => {
                this.isDisplaying = false;
                this.$emit('close', event, this);
            });

            this.isShowing = false;
        },

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
         * A callback for the escape function.
         *
         * @return void
         */
        onEsc(event) {
            (this.type === 'confirm' || this.type ===  'prompt') ? this.cancel(event) : this.close(event);
        },

        /**
         * Open the modal.
         *
         * @return void
         */
        open() {
            /*
            this.$mount(document.body.appendChild(document.createElement('div')));

            if(contents.$mount) {
                contents.$parent = this;
                contents.$mount(
                    this.$el.querySelector('.child-component').appendChild(document.createElement('div'))
                );
            }
            */

            this.isDisplaying = true;

            this.$nextTick(() => {
                transition(this.$el).then(delay => {
                    this.isShowing = true;
                    this.$emit('open');
                });
            });
        },

        /**
         * Toggle the modal's open/close method.
         *
         * @return void
         */
        toggle() {
            if(!this.isShowing) {
                this.open();
            }
            else {
                this.close();
            }
        }

    },

    mounted() {
        const init = el => {
            const triggers = isString(this.trigger) ? this.trigger.split(' ') : this.trigger;

            each(triggers, trigger => {
                el.addEventListener(trigger, event => {
                    this.toggle();
                });
            });
        };

        if(this.target && this.trigger !== 'manual') {
            if(this.target instanceof Element) {
                init(this.target);
            }
            else {
                document.querySelectorAll(this.target).forEach(el => {
                    init(el);
                });
            }
        }
    },

    data() {
        return {
            backdropComponent: null,
            isDisplaying: this.show || !this.target,
            isShowing: this.show || !this.target
        }
    },

    beforeRouteLeave(to, from, next) {
        modal.close();
    }

}

</script>
