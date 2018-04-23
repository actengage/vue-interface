<script>
import BaseType from './BaseType';
import { extend } from 'lodash-es';

export default {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

$activity-indicator-spinner-size: $font-size-base * 2.25;
$activity-indicator-spinner-width: 10%;
$activity-indicator-spinner-height: 30%;
$activity-indicator-spinner-delay: 1s;

@mixin spinner-rotate-selectors($start:1, $end:16, $delay:1.2s) {
    @for $i from $start through $end {
        & > div:first-child:nth-last-child(#{$i}),
        & > div:first-child:nth-last-child(#{$i}) ~ div {
            @include spinner-rotate-transform($i, $delay);
        }
    }
}

@mixin spinner-rotate-transform($total, $delay:1.2s) {
    @for $i from 1 through $total {
        &:nth-child(#{$i}) {
            transform: rotate(#{360 / $total * $i}deg);

            &:before {
                animation-delay: -#{$delay - ($delay / $total * ($i - 1))};
            }
        }
    }
}

.activity-indicator-spinner {
    position: relative;
    width: $activity-indicator-spinner-size;
    height: $activity-indicator-spinner-size;

    & > div  {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        &:before {
            content: '';
            display: block;
            margin: 0 auto;
            background-color: $gray-900;
            width: $activity-indicator-spinner-width;
            height: $activity-indicator-spinner-height;
            border-radius: 5px;
            animation: activity-indicator-spinner $activity-indicator-spinner-delay infinite ease-in-out both;
        }
    }

    &.activity-indicator-xs {
        width: $activity-indicator-spinner-size * .5;
        height: $activity-indicator-spinner-size * .5;
    }
    &.activity-indicator-sm {
        width: $activity-indicator-spinner-size * .75;
        height: $activity-indicator-spinner-size * .75;
    }
    &.activity-indicator-md {
        width: $activity-indicator-spinner-size * 1;
        height: $activity-indicator-spinner-size * 1;
    }
    &.activity-indicator-lg {
        width: $activity-indicator-spinner-size * 1.5;
        height: $activity-indicator-spinner-size * 1.5;
    }
    &.activity-indicator-xl {
        width: $activity-indicator-spinner-size * 2;
        height: $activity-indicator-spinner-size * 2;
    }

    @include spinner-rotate-selectors(1, 12, $activity-indicator-spinner-delay);

    @keyframes activity-indicator-spinner {
        0%, 39%, 100% { opacity: 0; }
        40% { opacity: 1; }
    }
}

.btn-activity-indicator-spinner {
    &:not(.btn-warning) .activity-indicator-spinner > div:before {
        background-color: white;
    }
}

</style>
