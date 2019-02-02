<script>
import BaseType from './BaseType';

export default {

    name: 'ActivityIndicatorDots',

    extends: BaseType
};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

$activity-indicator-dot-size: .6rem;

.activity-indicator-dots {

    & > div {
        border-radius: 100%;
        display: inline-block;
        background-color: $gray-900;
        width: $activity-indicator-dot-size;
        height: $activity-indicator-dot-size;
        animation: activity-indicator-dots 1.4s infinite ease-in-out both;
    }

    & > div:not(:last-child) {
        margin-right: $activity-indicator-dot-size * .33;
    }

    &.activity-indicator-xs > div {
        width: $activity-indicator-dot-size * .5;
        height: $activity-indicator-dot-size * .5;
    }

    &.activity-indicator-sm > div {
        width: $activity-indicator-dot-size * .75;
        height: $activity-indicator-dot-size * .75;
    }

    &.activity-indicator-md > div {
        width: $activity-indicator-dot-size * 1;
        height: $activity-indicator-dot-size * 1;
    }

    &.activity-indicator-lg > div {
        width: $activity-indicator-dot-size * 1.5;
        height: $activity-indicator-dot-size * 1.5;
    }

    &.activity-indicator-xl > div {
        width: $activity-indicator-dot-size * 2;
        height: $activity-indicator-dot-size * 2;
    }

    @for $i from 0 through 12 {
        & > div:nth-child(#{$i + 1}) {
            animation-delay: $i * .16s;
        }
    }

    @keyframes activity-indicator-dots {
        0%, 80%, 100% {
            transform: scale(0);
        } 40% {
            transform: scale(1.0);
        }
    }
}

.btn-activity-indicator-dots {
    &:not(.btn-warning) .activity-indicator-dots > div {
        background: white;
    }
}

</style>
