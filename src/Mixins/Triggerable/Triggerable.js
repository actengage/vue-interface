import { each } from 'lodash-es';
import { isString } from 'lodash-es';
import transition from '../../Helpers/Transition';

export default {

    props: {

        /**
         * Show the triggerable element with a fade effect.
         *
         * @type {Boolean}
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Is the triggerable element showing.
         *
         * @property Boolean
         */
        show: Boolean,

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

    methods: {

        initializeTrigger(el) {
            each(isString(this.trigger) ? this.trigger.split(' ') : this.trigger, trigger => {
                el.addEventListener(trigger, event => {
                    this.toggle();
                });
            });
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
                this.$el.focus();
            }
        },

        /**
         * Open the triggereable element
         *
         * @return void
         */
        open() {
            this.isDisplaying = true;

            this.$nextTick(() => {
                transition(this.$el).then(delay => {
                    this.isShowing = true;
                    this.$emit('open');
                });
            });
        },

        /**
         * Close the triggereable element
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
         * Toggle the triggereable element's open/close method.
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

    computed: {

        triggerableClasses() {
            return {
                'fade': this.fade,
                'show': this.isShowing
            };
        }

    },

    watch: {

        isShowing(value) {
            if(value) {
                this.focus();
            }
        },

        show(value) {
            this.isShowing = value;
        }

    },

    mounted() {
        if(this.target && this.trigger !== 'manual') {
            if(this.target instanceof Element) {
                this.initializeTrigger(this.target);
            }
            else {
                document.querySelectorAll(this.target).forEach(el => {
                    this.initializeTrigger(el);
                });
            }
        }
    },

    data() {
        return {
            isDisplaying: this.show || !this.target,
            isShowing: this.show || !this.target
        }
    }

}
