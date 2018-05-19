<template>
    <div class="popover" :class="classes" role="tooltip">
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
show.bs.popover	This event fires immediately when the show instance method is called.
shown.bs.popover	This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).
hide.bs.popover	This event is fired immediately when the hide instance method has been called.
hidden.bs.popover	This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).
inserted.bs.popover	This event is fired after the show.bs.popover event when the popover template has been added to the DOM.
$('#myPopover').on('hidden.bs.popover', function () {
  // do something…
})
*/
import prefix from '../../Helpers/Prefix';

export default {

    name: 'popover',

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
         * Delay showing and hiding the popover (ms) - does not apply to manual trigger type
         *
         * If a number is supplied, delay is applied to both hide/show
         *
         * Object structure is: delay: { "show": 500, "hide": 100 }
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
            default: 'flip',
            validate(value) {
                return ['click', 'hover', 'focus', 'manual'].indexOf(value) !== -1;
            }
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
        trigger: String

    },

    computed: {

        classes() {
            return prefix({
                'top': this.placement === 'top',
                'bottom': this.placement === 'bottom',
                'left': this.placement === 'left',
                'right': this.placement === 'right'
            }, 'bs-popover')
        }

    }

};
</script>
