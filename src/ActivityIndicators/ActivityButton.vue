<template>
    <button :type="type" class="btn" :class="classes" @click="onClick">
        <slot>{{label}}</slot>
        <activity-indicator :type="indicator" />
    </button>
</template>

<script>
import { extend } from 'lodash';
import ActivityIndicator from './ActivityIndicator';

const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
        case "s": // seconds
            milliseconds = num * 1000;
            break;
        case "ms":
        default:
            milliseconds = num;
            break;
    }

    return milliseconds || 0;
};

const animated = function(el, callback) {
    const defaultView = (el.ownerDocument || document).defaultView;

    setTimeout(() => {
        callback.apply();
    }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

export default {

    name: 'activity-button',

    components: {
        ActivityIndicator
    },

    props: {

        /**
         * Should show the activity indicator inside the button.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * Should show the button as disabled.
         *
         * @property Boolean
         */
        disabled: {
            type: Boolean,
            default: false
        },

        /**
         * Display the button as block width.
         *
         * @property Boolean
         */
        block: {
            type: Boolean,
            default: false
        },

        /**
         * The size of the button.
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md'
        },

        /**
         * The bootstrap color of the button.
         *
         * @property String
         */
        color: {
            type: String,
            default: 'primary'
        },

        /**
         * The `type` attribute for the button.
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
        },

        /**
         * The type of activity indicator inside the button.
         *
         * @property String
         */
        indicator: {
            type: String,
            default: 'spinner'
        },

        /**
         * The orientation of the activity button inside the button.
         *
         * @property String
         */
        orientation: {
            type: String,
            default: 'right'
        },

        /**
         * The button label. If not passed as a property, label must be passed
         * inside the element's html.
         *
         * @property String
         */
        label: {
            type: String
        }
    },

    methods: {

        /**
         * Disable the button.
         *
         * @return void
         */
        disable() {
            this.$el.disabled = true;
        },

        /**
         * Enable the button.
         *
         * @return void
         */
        enable() {
            this.$el.disabled = false;
        },

        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        showActivity() {
            this.disable();

            animated(this.$el, () => {
                this.$el.classList.add('btn-activity');
                this.$emit('activity:show');
            });
        },

        /**
         * Hide the activity indicator inside the button.
         *
         * @return void
         */
        hideActivity() {
            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, () => {
                this.enable();
                this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                this.$emit('activity:hide');
            });
        },

        /**
         * Disable the button.
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event, this);
        },
    },

    computed: {

        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes() {
            const classes = {
                'btn-block': this.block,
                'btn-activity': this.activity
            };

            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.color.replace('btn-', '')] = !!this.color;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicator.replace('btn-activity-indicator-', '')] = !!this.indicator;

            return classes;
        }
    },

    watch: {

        activity(value) {
            if(value) {
                this.showActivity();
            }
            else {
                this.hideActivity();
            }
        }

    }

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap.scss';

// Activity Indicator variables
$activity-indicator-animated-delay-in: 333ms;
$activity-indicator-animated-delay-out: 333ms;

$activity-indicator-spinner-size: $font-size-base * 2.25;
$activity-indicator-spinner-width: 10%;
$activity-indicator-spinner-height: 30%;
$activity-indicator-spinner-delay: 1s;

@keyframes btn-activity-in {
    0%, 100% {
        transform: scale(1);
    } 30% {
        transform: scale(.98);
    }
}

@keyframes btn-activity-out {
    0%, 100% {
        transform: scale(1);
    } 70% {
        transform: scale(.98);
    }
}

// Activity Indicator Button
.btn-activity-top,
.btn-activity-bottom,
.btn-activity-left,
.btn-activity-right {
    position: relative;
    transition: padding ($activity-indicator-animated-delay-in / 2) ease-in;

    & .activity-indicator {
        opacity: 0;
        position: absolute;
        visibility: hidden;
        transition: opacity $activity-indicator-animated-delay-out ease-in;
    }
}

.btn-activity-top .activity-indicator,
.btn-activity-bottom .activity-indicator {
    left: 50%;
    margin-right: -50%;
    transform: translateX(-50%);
}
.btn-activity-left .activity-indicator,
.btn-activity-right .activity-indicator {
    top: 50%;
    margin-bottom: -50%;
    transform: translateY(-50%);
}

.btn-activity:not(.btn-link) {
    animation: btn-activity-in $activity-indicator-animated-delay-in;
}
.btn-hide-activity:not(.btn-link) {
    animation: btn-activity-out $activity-indicator-animated-delay-out;
}

.btn-activity {

    &.btn-hide-activity .activity-indicator {
        opacity: 0;
    }

    & .activity-indicator {
        opacity: 1;
        visibility: visible;
        position: absolute;
    }

    &.btn-outline-primary.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $primary;
    }
    &.btn-outline-secondary.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $success;
    }
    &.btn-outline-danger.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $danger;
    }
    &.btn-outline-success.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $success;
    }
    &.btn-outline-warning.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $warning;
    }
    &.btn-outline-info.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $info;
    }
    &.btn-outline-link.btn-activity-indicator-spinner .activity-indicator > div:before {
        background-color: $link-color;
    }

    &.btn-xs {
        &.btn-activity-top.btn-activity-indicator-dots {
            padding-top: $font-size-base * 1.25;

            & .activity-indicator {
                top: $font-size-base * .5;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-dots {
            padding-bottom: $font-size-base * 1.25;

            & .activity-indicator {
                bottom: $font-size-base * .5;
            }
        }

        &.btn-activity-left.btn-activity-indicator-dots {
            padding-left: $font-size-base * 2.33;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-dots {
            padding-right: $font-size-base * 2.33;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-dots .activity-indicator > div,
        & .activity-indicator-dots > div {
            width: $font-size-base / 3;
            height: $font-size-base / 3;
        }

        &.btn-activity-top.btn-activity-indicator-spinner {
            padding-top: $font-size-base * 1.66;

            & .activity-indicator {
                top: $font-size-base * .25;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-spinner {
            padding-bottom: $font-size-base * 1.66;

            & .activity-indicator {
                bottom: $font-size-base * .25;
            }
        }

        &.btn-activity-left.btn-activity-indicator-spinner {
            padding-left: $font-size-base * 1.66;

            & .activity-indicator {
                left: $font-size-base * .25;
            }
        }

        &.btn-activity-right.btn-activity-indicator-spinner {
            padding-right: $font-size-base * 1.66;

            & .activity-indicator {
                right: $font-size-base * .25;
            }
        }

        &.btn-activity-indicator-spinner .activity-indicator,
        & .activity-indicator-spinner {
            width: $font-size-base * 1;
            height: $font-size-base * 1;

            & > div:before {
                //width: $activity-indicator-spinner-width * .63;
                //height: $activity-indicator-spinner-height * .66;
                width: $activity-indicator-spinner-width * .84;
                height: $activity-indicator-spinner-height * 1;
            }
        }
    }

    &.btn-sm {
        &.btn-activity-top.btn-activity-indicator-dots {
            padding-top: $font-size-base * 1.75;

            & .activity-indicator {
                top: $font-size-base * .5;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-dots {
            padding-bottom: $font-size-base * 1.75;

            & .activity-indicator {
                bottom: $font-size-base * .5;
            }
        }

        &.btn-activity-left.btn-activity-indicator-dots {
            padding-left: $font-size-base * 3;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-dots {
            padding-right: $font-size-base * 3;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-dots .activity-indicator > div,
        & .activity-indicator-dots > div {
            width: $font-size-base / 2;
            height: $font-size-base / 2;
        }

        &.btn-activity-top.btn-activity-indicator-spinner {
            padding-top: $font-size-base * 2;

            & .activity-indicator {
                top: $font-size-base * .33;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-spinner {
            padding-bottom: $font-size-base * 2;

            & .activity-indicator {
                bottom: $font-size-base * .33;
            }
        }

        &.btn-activity-left.btn-activity-indicator-spinner {
            padding-left: $font-size-base * 2.5;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-spinner {
            padding-right: $font-size-base * 2.5;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-spinner .activity-indicator,
        & .activity-indicator-spinner {
            width: $font-size-base * 1.5;
            height: $font-size-base * 1.5;

            & > div:before {
                width: $activity-indicator-spinner-width * .56;
                height: $activity-indicator-spinner-height;
            }
        }
    }

    &:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl),
    &.btn-md {
        &.btn-activity-top.btn-activity-indicator-dots {
            padding-top: $font-size-base * 2;

            & .activity-indicator {
                top: $font-size-base * .66;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-dots {
            padding-bottom: $font-size-base * 2;

            & .activity-indicator {
                bottom: $font-size-base * .66;
            }
        }

        &.btn-activity-left.btn-activity-indicator-dots {
            padding-left: $font-size-base * 4;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-dots {
            padding-right: $font-size-base * 4;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-dots .activity-indicator > div,
        & .activity-indicator-dots > div {
            width: $font-size-base / 1.25;
            height: $font-size-base / 1.25;
        }

        &.btn-activity-top.btn-activity-indicator-spinner {
            padding-top: $font-size-base * 2.75;

            & .activity-indicator {
                top: $font-size-base * .33;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-spinner {
            padding-bottom: $font-size-base * 2.75;

            & .activity-indicator {
                bottom: $font-size-base * .33;
            }
        }

        &.btn-activity-left.btn-activity-indicator-spinner {
            padding-left: $font-size-base * 2.75;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-spinner {
            padding-right: $font-size-base * 2.75;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-spinner .activity-indicator,
        & .activity-indicator-spinner {
            width: $font-size-base * 1.75;
            height: $font-size-base * 1.75;

            & > div:before {
                width: $activity-indicator-spinner-width * .66;
                height: $activity-indicator-spinner-height;
            }
        }
    }

    &.btn-lg {
        &.btn-activity-top.btn-activity-indicator-dots {
            padding-top: $font-size-base * 2.75;

            & .activity-indicator {
                top: $font-size-base * .66;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-dots {
            padding-bottom: $font-size-base * 2.75;

            & .activity-indicator {
                bottom: $font-size-base * .66;
            }
        }

        &.btn-activity-left.btn-activity-indicator-dots {
            padding-left: $font-size-base * 5;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-dots {
            padding-right: $font-size-base * 5;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-dots .activity-indicator > div,
        & .activity-indicator-dots > div {
            width: $font-size-base * 1.1;
            height: $font-size-base * 1.1;
        }

        &.btn-activity-top.btn-activity-indicator-spinner {
            padding-top: $font-size-base * 3.5;

            & .activity-indicator {
                top: $font-size-base * .5;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-spinner {
            padding-bottom: $font-size-base * 3.5;

            & .activity-indicator {
                bottom: $font-size-base * .5;
            }
        }

        &.btn-activity-left.btn-activity-indicator-spinner {
            padding-left: $font-size-base * 3.25;

            & .activity-indicator {
                left: $font-size-base * .5;
            }
        }

        &.btn-activity-right.btn-activity-indicator-spinner {
            padding-right: $font-size-base * 3.25;

            & .activity-indicator {
                right: $font-size-base * .5;
            }
        }

        &.btn-activity-indicator-spinner .activity-indicator,
        & .activity-indicator-spinner {
            width: $font-size-base * 2.15;
            height: $font-size-base * 2.15;

            & > div:before {
                width: $activity-indicator-spinner-width * .75;
            }
        }
    }

    &.btn-xl {
        &.btn-activity-top.btn-activity-indicator-dots {
            padding-top: $font-size-base * 3.75;

            & .activity-indicator {
                top: $font-size-base * 1;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-dots {
            padding-bottom: $font-size-base * 3.75;

            & .activity-indicator {
                bottom: $font-size-base * 1;
            }
        }

        &.btn-activity-left.btn-activity-indicator-dots {
            padding-left: $font-size-base * 6;

            & .activity-indicator {
                left: $font-size-base * .75;
            }
        }

        &.btn-activity-right.btn-activity-indicator-dots {
            padding-right: $font-size-base * 6;

            & .activity-indicator {
                right: $font-size-base * .75;
            }
        }

        &.btn-activity-indicator-dots .activity-indicator > div,
        & .activity-indicator-dots > div {
            width: $font-size-base * 1.25;
            height: $font-size-base * 1.25;
        }

        &.btn-activity-top.btn-activity-indicator-spinner {
            padding-top: $font-size-base * 4.25;

            & .activity-indicator {
                top: $font-size-base * .66;
            }
        }

        &.btn-activity-bottom.btn-activity-indicator-spinner {
            padding-bottom: $font-size-base * 4.25;

            & .activity-indicator {
                bottom: $font-size-base * .66;
            }
        }

        &.btn-activity-left.btn-activity-indicator-spinner {
            padding-left: $font-size-base * 4;

            & .activity-indicator {
                left: $font-size-base * .75;
            }
        }

        &.btn-activity-right.btn-activity-indicator-spinner {
            padding-right: $font-size-base * 4;

            & .activity-indicator {
                right: $font-size-base * .75;
            }
        }

        &.btn-activity-indicator-spinner .activity-indicator,
        & .activity-indicator-spinner {
            width: $font-size-base * 2.5;
            height: $font-size-base * 2.5;

            & > div:before {
                width: $activity-indicator-spinner-width * .75;
            }
        }
    }

}
</style>
