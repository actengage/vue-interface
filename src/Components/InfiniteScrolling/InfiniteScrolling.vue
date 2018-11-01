<template>
    <div class="infinite-scrolling" :style="{height: heightUnit, background: background}">
        <activity-indicator v-if="activity" :size="size" :type="type" center/>
    </div>
</template>

<script>
import unit from '../../Helpers/Unit';
import ActivityIndicator from '../ActivityIndicator';

export default {

    name: 'infinite-scrolling',

    components: {
        ActivityIndicator
    },

    props: {

        /**
         * Is the activity indicator showing
         *
         * @property String
         */
        activity: Boolean,

        /**
         * The activity indicator background style
         *
         * @property String
         */
        background: String,

        /**
         * The activity indicator size
         *
         * @property String
         */
        height: {
            type: Number,
            default: 100
        },

        /**
         * The activity indicator size
         *
         * @property String
         */
        size: String,

        /**
         * The activity indicator type
         *
         * @property String
         */
        type: String,

        /**
         * The scroll observer threshold for when an element is considered
         * into view. Must be a validate between 0 and 1, and is a percentage.
         *
         * @property Number
         */
        threshold: {
            type: Number,
            default: 0.75,
            validate(value) {
                return value >= 0 && value <= 1;
            }
        }

    },

    methods: {

        scrollIntoViewport(entry) {
            this.$emit('scroll:in', entry);

            if (!this.activity) {
                this.$emit('load', entry);
            }
        },

        scrollOutViewport(entry) {
            this.$emit('scroll:out', entry);
        }

    },

    computed: {

        heightUnit() {
            return unit(this.height);
        }

    },

    mounted() {
        this.$nextTick(() => {
            new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasScrolledIntoViewport) {
                        this.scrollIntoViewport(entry, observer);
                        this.hasScrolledIntoViewport = true;
                    }
                    else if (this.hasScrolledIntoViewport) {
                        this.scrollOutViewport(entry, observer);
                        this.hasScrolledIntoViewport = false;
                    }
                });
            }, {
                threshold: this.threshold
            }).observe(this.$el);
        });
    },

    data() {
        return {
            hasScrolledIntoViewport: false
        };
    }

};
</script>

<style lang="scss">
.infinite-scrolling {
    position: relative;

}
</style>
