import { inRange } from 'lodash';

export default {

    props: {

        /**
         * The google maps API key.
         *
         * @property Number
         */
        apiKey: {
            type: String,
            required: true
        },

        /**
         * The width of the map.
         *
         * @property Number
         */
        width: {
            type: [String, Number],
            default: '100%'
        },

        /**
         * The height of the map.
         *
         * @property Number
         */
        height: {
            type: [String, Number],
            default: '400px'
        },

        /**
         * The starting latitude.
         *
         * @property Number
         */
        latitude: {
            type: Number,
            required: true
        },

        /**
         * The starting longitude.
         *
         * @property Number
         */
        longitude: {
            type: Number,
            required: true
        },

        /**
         * The starting zoom level.
         *
         * @property Number
         */
        zoom: {
            type: Number,
            default: 8,
            validate(value) {
                return inRange(value, 1, 15);
            }
        },

        /**
         * The API options sent to Google Maps.
         *
         * @property Number
         */
        options: {
            type: [Function, Object],
            default() {
                return {};
            }
        }

    }

}
