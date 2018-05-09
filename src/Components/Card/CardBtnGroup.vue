<template>

    <btn-group class="card-btn-group">
        <slot/>
    </btn-group>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-btn-group',

    extends: Card

}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.card {
    .card-btn-group,
    .btn-group.card-btn-group {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .btn {
            flex: 1;
            width: 100%;
            text-align: center;
            border-radius: 0;

            &:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                padding: $font-size-base;
                transform: translateY(-50%);
                border-right: 1px solid $card-border-color;
            }
        }
    }
}
</style>
