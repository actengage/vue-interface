<template>
    <div v-show="isDisplaying" class="popover" :class="mergeClasses(triggerableClasses, classes)" role="tooltip">
        <div class="arrow"></div>
        <popover-header v-if="title" v-html="title"/>
        <popover-body>
            <slot/>
        </popover-body>
    </div>
</template>

<script>
/*
Events
Event Type	Description
close.bs.popover	This event fires immediately when the close instance method is called.
closen.bs.popover	This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).
open.bs.popover	This event is fired immediately when the open instance method has been called.
hidden.bs.popover	This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).
inserted.bs.popover	This event is fired after the close.bs.popover event when the popover template has been added to the DOM.
$('#myPopover').on('hidden.bs.popover', function () {
  // do something…
})
*/
import { each } from '../../Helpers/Functions';
import { isString } from '../../Helpers/Functions';
import Popper from 'popper.js';
import prefix from '../../Helpers/Prefix';
import Triggerable from '../../Mixins/Triggerable';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'popover',

    mixins: [
        Triggerable,
        MergeClasses
    ],

    props: {

        /**
         * Apply a CSS fade transition to the popover
         *
         * @type {Boolean}
         */
        animation: {
            type: Boolean,
            default: true
        },

        /**
         * Overflow constraint boundary of the popover. Accepts the values of
         * 'viewport', 'window', 'scrollParent', or an HTMLElement reference
         * (JavaScript only). For more information refer to Popper.js's
         * preventOverflow docs.
         *
         * @type {Object}
         */
        boundary: {
            type: [String, Array],
            default: 'scrollParent',
            validate(value) {
                return ['viewport', 'window', 'viewport'].indexOf(value) !== -1;
            }
        },

        /**
         * Appends the popover to a specific element.
         *
         * Example: container: 'body'.
         *
         * This option is particularly useful in that it allows you to position
         * the popover in the flow of the document near the triggering element -
         * which will prevent the popover from floating away from thetriggering
         * element during a window resize.
         *
         * @type {String|Element|Boolean}
         */
        container: {
            type: [String, Element, Boolean],
            default: false
        },

        /**
         * Delay closeing and hiding the popover (ms) - does not apply to manual trigger type
         *
         * If a number is supplied, delay is applied to both open/close
         *
         * Object structure is: delay: { "close": 500, "open": 100 }
         *
         * @type {Number|Object}
         */
        delay: {
            type: [Number, Object],
            default: 0
        },

        /**
         * Allow to specify which position Popper will use on fallback. For more
         * information refer to Popper.js's behavior docs
         *
         * @type {String|Array}
         */
        fallbackPlacement: {
            type: [String, Array],
            default: 'flip'
        },

        /**
         * Offset of the popover relative to its target. For more information
         * refer to Popper.js's offset docs.
         *
         * @type {Number|String}
         */
        offset: {
            type: [Number, String],
            default: 0
        },

        /**
         * How to position the popover - auto | top | bottom | left | right.
         *
         * When auto is specified, it will dynamically reorient the popover.
         *
         * When a function is used to determine the placement, it is called with
         * the popover DOM node as its first argument and the triggering element
         * DOM node as its second. The this context is set to the popover
         * instance.
         *
         * @type {String|Function}
         */
        placement: {
            type: [String, Function],
            default: 'top',
            validate(value) {
                return ['auto', 'top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
            }
        },

        /**
         * If this property is passed, it will force the popover to be visible
         * by default.
         *
         * @type {Boolean}
         */
        show: Boolean,

        /**
         * If a selector is provided, popover objects will be delegated to the
         * specified targets. In practice, this is used to enable dynamic HTML
         * content to have popovers added. See this and an informative example.
         *
         * @type {Boolean|String}
         */
        selector: {
            type: [Boolean, String],
            default: false
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
         * The popover title
         *
         * @type {String}
         */
        title: String,

        /**
         * How popover is triggered - click | hover | focus | manual. You may
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

        align() {
            each(this.$poppers, el => {
                el.popper.update();
            });
        },

        createPopper(el) {
            return new Popper(el, this.$el, {
                offset: this.offset,
                placement: this.placement,
                modifiers: {
                    flip: {
                        boundariesElement: this.container,
                        behavior: this.fallbackPlacement
                    },
                    offset: {
                        enabled: !!this.offset,
                        offset: this.offset
                    },
                    arrow: {
                        enable: true,
                        element: this.$el.querySelector('.arrow')
                    }
                }
            });
        },

        getArrowElement() {
            return this.$el.querySelector('.arrow');
        },

        /**
         * Initialize the trigger event for the specified elements
         *
         * @param  {Element} el
         * @return {void}
         */
        initializeTrigger(el) {
            this.$poppers[el] = {
                trigger: isString(this.trigger) ? this.trigger.split(' ') : this.trigger,
                popper: this.createPopper(el),
                event: (event) => {
                    this.toggle();
                    this.$poppers[el].popper.update();
                }
            };

            each(this.$poppers[el].trigger, trigger => {
                el.addEventListener(trigger, this.$poppers[el].event);
            });
        }

    },

    watch: {

        isShowing(value) {
            this.$nextTick(() => {
                this.align();

                if(value) {
                    this.focus();
                }
            });
        }

    },

    computed: {

        classes() {
            return prefix({
                'top': this.placement === 'top',
                'bottom': this.placement === 'bottom',
                'left': this.placement === 'left',
                'right': this.placement === 'right'
            }, 'bs-popover');
        }

    },

    beforeCreate() {
        if(!this.$poppers) {
            this.$poppers = {};
        }
    }

};
</script>
