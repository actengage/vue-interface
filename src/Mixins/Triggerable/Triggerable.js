import transition from '../../Helpers/Transition';
import { each, isString, isFunction } from '../../Helpers/Functions';

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
         * The animation class.
         *
         * @type {String}
         */
        animationClass: {
            type: String,
            default: 'fade'
        },

        /**
         * The display class.
         *
         * @type {String}
         */
        displayClass: {
            type: String,
            default: 'display'
        },

        /**
         * The duration length.
         *
         * @type {String}
         */
        duration: String,

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
         * The show class.
         *
         * @type {String}
         */
        showClass: {
            type: String,
            default: 'show'
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

        divideUnit(dividend, divisor) {
            const [ match, value, unit ] = dividend.match(/^(\d+)(\w+)/);

            if(match) {
                return `${parseFloat(value, 10) / divisor}${unit}`;
            }

            return dividend;
        },

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

                    event.preventDefault();
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
                    let target = this.target(this);

                    if(isString(target)) {
                        this.initializeSelector(target);
                    }
                    else {
                        this.initializeTrigger(target);
                    }
                }
                else if(this.target instanceof Element) {
                    this.initializeTrigger(this.target);
                }
                else {
                    this.initializeSelector(this.target);
                }
            }
        },

        /**
         * Initialize the event triggers on a selector
         *
         * @return void
         */
        initializeSelector(selector) {
            document
                .querySelectorAll(selector)
                .forEach(el => this.initializeTrigger(el));
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
            if(!this.isDisplaying) {
                this.isDisplaying = true;

                this.$nextTick(() => {
                    transition(this.$el, this.duration).then(delay => {
                        this.isShowing = true;
                        this.$emit('open');
                    });
                });
            }

            return this;
        },

        /**
         * Close the triggereable element
         *
         * @return this
         */
        close(event) {
            if(this.isShowing) {
                this.isShowing = false;

                transition(this.$el, this.duration).then(delay => {
                    this.isDisplaying = false;
                    this.$emit('close', event);
                });
            }

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
                [this.animationClass]: this.animation,
                [this.showClass]: this.isShowing,
                [this.displayClass]: this.isDisplaying,
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
            isShowing: false,
            isDisplaying: false,
        };
    }

};
