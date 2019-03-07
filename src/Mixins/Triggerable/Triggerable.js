import { each, isString, isFunction } from '../../Helpers/Functions';
import transition from '../../Helpers/Transition';

export default {

    props: {

        /**
         * Show the triggerable element with a animated fade effect.
         *
         * @type {Boolean}
         */
        animation: {
            type: Boolean,
            default: true
        },

        /**
         * Is the triggerable element showing.
         *
         * @property Boolean
         */
        show: {
            type: Boolean,
            defaut: false
        },

        /**
         * The target element used to position the popover.
         *
         * @type {String|Element|Boolean}
         */
        target: {
            type: [Function, String, Element, Boolean],
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

        /**
         * Initialize the trigger event for the specified elements
         *
         * @param  {Element} el
         * @return {void}
         */
        initializeTrigger(el) {
            each(isString(this.trigger) ? this.trigger.split(' ') : this.trigger, trigger => {
                el.addEventListener(trigger, event => {
                    this.toggle();
                });
            });
        },

        /**
         * Initialize the event triggers
         *
         * @return void
         */
        initializeTarget() {
            if(this.target && this.trigger !== 'manual') {
                if(isFunction(this.target)) {
                    this.initializeTrigger(this.target(this));
                }
                else if(this.target instanceof Element) {
                    this.initializeTrigger(this.target);
                }
                else {
                    (this.$parent.$el || document)
                        .querySelectorAll(this.target)
                        .forEach(el => {
                            this.initializeTrigger(el);
                        });
                }
            }
        },

        /**
         * Focus on the first field in the modal (if exists).
         *
         * @return this
         */
        focus() {
            this.$nextTick(() => {
                const el = this.$el.querySelector('.form-control, input, select, textarea');

                if(el) {
                    el.focus();
                }
                else {
                    this.$el.focus();
                }
            });

            return this;
        },

        /**
         * Open the triggereable element
         *
         * @return this
         */
        open() {
            this.isDisplaying = true;

            this.$nextTick(() => {
                transition(this.$el).then(delay => {
                    this.isShowing = true;
                    this.$emit('open');
                });
            });

            return this;
        },

        /**
         * Close the triggereable element
         *
         * @return this
         */
        close(event) {
            transition(this.$el).then(delay => {
                this.isDisplaying = false;
                this.$emit('close', event);
            });

            this.isShowing = false;

            return this;
        },

        /**
         * Toggle the triggereable element's open/close method.
         *
         * @return this
         */
        toggle() {
            if(!this.isShowing) {
                this.open();
            }
            else {
                this.close();
            }

            return this;
        }

    },

    computed: {

        triggerableClasses() {
            return {
                'fade': this.animation,
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
        this.initializeTarget();
    },

    data() {
        return {
            isShowing: this.show,
            isDisplaying: this.show || !this.target
        };
    }

};
