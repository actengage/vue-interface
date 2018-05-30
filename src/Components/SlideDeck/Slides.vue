<script>
import { extend } from 'lodash-es';
import { findIndex } from 'lodash-es';
import { filter } from 'lodash-es';
import { first } from 'lodash-es';
import { isObject } from 'lodash-es';
import { isUndefined } from 'lodash-es';
import { map } from 'lodash-es';
import transition from '../../Helpers/Transition';

export default {

    name: 'slides',

    props: {

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */

        active: {
            type: [String, Number],
            default: 0
        }

    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        }

    },

    methods: {

        /**
         * Get the HTML nodes from the default slots (exluding children without tags).
         *
         * @return {Array}
         */
        slides() {
            return map(filter(this.$slots.default, (vnode, i) => {
                return !!vnode.tag;
            }), (vnode, i) => {
                if(!vnode.key || !vnode.data && !vnode.data.key) {
                    vnode.data = extend(vnode.data, {
                        key: vnode.key = i
                    });
                }

                return vnode;
            });
        },

        /**
         * Get a slide by index.
         *
         * @return {Array}
         */
        slide(index) {
            return this.findSlideByKey(index) || this.findSlideByIndex(index) || this.findSlideByIndex(0);
        },

        /**
         * Find a slide by a given key or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByKey(key) {
            return first(filter(this.slides(), (vnode, i) => {
                if(vnode.key === key) {
                    return vnode;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return vnode;
                }

                return null;
            }));
        },

        /**
         * Find a slide by a given index or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByIndex(index) {
            return this.slides()[index] || null;
        },

        /**
         * Get the slide index for a give slide object or key
         *
         * @param  {Number|String} slide
         * @return {VNode|null}
         */
        getSlideIndex(slide) {
            const key = !isUndefined(slide.data) ? slide.data.key : slide.key || slide;

            return findIndex(this.slides(), (vnode, i) => {
                if(slide === vnode) {
                    return true;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return true;
                }
                else if(vnode.key && vnode.key === key) {
                    return true;
                }
                else if(i === slide) {
                    return true;
                }

                return false;
            });
        }

    },

    data() {
        return {
            lastSlide: null,
            currentSlide: this.active
        }
    },

    render(h) {
        return this.slide(this.currentSlide);
    }

};
</script>
