<template>

    <div class="position-relative" :style="{'width': formattedWidth, 'height': formattedHeight}">

        <activity-indicator v-if="!loaded" size="md" :center="true" />

        <div v-else="loaded" v-google-map="mapOptions" class="google-map"></div>

    </div>

</template>

<script>
import { each } from 'lodash';
import { extend } from 'lodash';
import { isNumber } from 'lodash';
import { isFunction } from 'lodash';
import script from '@/Toolbox/Helpers/Script';
import GoogleMapOptions from '@/Toolbox/Mixins/GoogleMapOptions';
import ActivityIndicator from '@/Toolbox/ActivityIndicators/ActivityIndicator';

const MAP_EVENTS = [
    'bounds_changed',
    'center_changed',
    'click',
    'dblclick',
    'drag',
    'dragend',
    'dragstart',
    'heading_changed',
    'idle',
    'maptypeid_changed',
    'mousemove',
    'mouseout',
    'mouseover',
    'projection_changed',
    'resize',
    'rightclick',
    'tilesloaded',
    'tilt_changed',
    'zoom_changed',
];

export default {

    name: 'google-map',

    mixins: [GoogleMapOptions],

    components: {
        ActivityIndicator
    },

    directives: {
        googleMap: {
            inserted(el, binding, vnode) {
                vnode.context.initialize(el, binding.value);
            }
        }
    },

    computed: {

        /**
         * The computed map options merging the user specified options and default.
         *
         * @property Number
         */
        mapOptions() {
            return extend({
                zoom: this.zoom,
                center: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                mapTypeControl: false,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                fullscreenControl: false
            }, isFunction(this.options) ? this.options(google) : this.options);
        },

        /**
         * The formatted width.
         *
         * @property String
         */
        formattedWidth() {
            return isNumber(this.width) ? `${this.width}px` : this.width;
        },

        /**
         * The formatted height.
         *
         * @property String
         */
        formattedHeight() {
            return isNumber(this.height) ? `${this.height}px` : this.height;
        }

    },

    methods: {

        initialize(el, options) {
            const self = this, map = this.map = new google.maps.Map(el, options);

            this.$emit('initialize', this);

            each(MAP_EVENTS, event => {
                map.addListener(event, function(e) {
                    const args = [].slice.call(arguments);

                    args.unshift(event);

                    self.$emit.apply(self, args);
                });
            });

            return map;
        },

        addMarker(marker) {

        }

    },

    data() {
        return {
            map: null,
            loaded: false
        };
    },

    mounted() {
        const url = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=geometry,places`;

        script(url, () => {
            this.loaded = true;
            this.$emit('loaded', this);
        });
    }
}

</script>

<style>
    .google-map {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
