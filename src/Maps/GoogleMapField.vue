<template>
    <div class="google-map-field" :class="{'form-group': group}" :style="{'width': formattedWidth, 'height': formattedHeight}">

        <div class="google-map-field-controls left" :class="{'show': !isDragging && !drawingMode}">
            <button type="button" class="btn btn-sm btn-primary" :class="{'disabled': !value.length}" @click="showList()"><i class="fa fa-list"></i></button>
            <button v-if="!max || value.length < max" type="button" class="btn btn-sm btn-primary" @click="showSearch()"><i class="fa fa-search"></i> Search</button>
        </div>

        <div class="google-map-field-controls right" :class="{'show': !isDragging && !drawingMode}">
            <button-dropdown
                size="sm"
                align="right"
                icon="fa fa-plus"
                :split="!!lastSelectedAction"
                :label="lastSelectedAction ? `${lastSelectedAction.label}` : null" :items="mapDropdownItems"
                v-if="!max || value.length < max"
                @click="onActionClick"
                @item:click="onItemClick"
            />
        </div>

        <div class="google-map-field-controls right show-immediately" :class="{'show': drawingMode}">
            <button type="button" class="btn btn-sm btn-danger" @click="onClickCancel"><i class="fa fa-times"></i> Cancel</button>
            <button type="button" class="btn btn-sm btn-primary" @click="onClickSave"><i class="fa fa-times"></i> Save</button>
        </div>

        <overlay :visible.sync="isShowingSearch">
            <div class="google-map-search-field">
                <input type="text" v-model="query" placeholder="Enter an address, coordinate, place, or location..." @keypress.enter.prevent="onSubmit($event, query)"/>
                <activity-button type="button" class="btn btn-lg btn-primary" :activity="isGeocoding" :disabled="!query" @click="onSubmit($event, query)">Search <i class="fa fa-long-array-right"></i></activity-button>
            </div>

            <div class="google-map-search-results">
                <div v-if="results">
                    <p>{{results.length}} possible locations found. Select the correct location to continue:</p>

                    <list-group>
                        <list-group-item v-for="(result, key) in results" :result="result" :key="key" :action="true" :label="result.formatted_address" @click="onClickResult($event, result)" />
                    </list-group>
                </div>

                <div v-else-if="errors && errors.query" class="alert alert-danger">
                    <i class="fa fa-warning"></i> {{errors.query}}
                </div>
            </div>
        </overlay>

        <overlay :visible.sync="isShowingList">
            <template v-if="value.length">
                <div class="overlay-controls right">
                    <a href="#" class="btn btn-primary btn-lg" :class="{'disabled': selected.length !== 1}" @click.prevent="editSelected"><i class="fa fa-edit"></i> Edit</a>
                    <a href="#" class="btn btn-danger btn-lg" :class="{'disabled': !selected.length}" @click.prevent="deleteSelected"><i class="fa fa-trash-o"></i> Delete</a>
                </div>

                <list-group :multiple="true" :activateable="true">
                    <list-group-item v-for="(item, key) in value" :key="key" :action="true" @click="toggleSelect(item)">
                        <h3 v-if="item.$infoWindow.$template.name" v-html="item.$infoWindow.$template.name" />
                        <h3 v-else="item.$infoWindow.$template.address" v-html="item.$infoWindow.$template.address" />
                        <div v-if="item.$infoWindow.$template.name && item.$infoWindow.$template.address" v-html="item.$infoWindow.$template.address" />
                        <div v-if="item.$infoWindow.$template.phone" v-html="item.$infoWindow.$template.phone" />
                        <div class="pt-1">
                            <badge v-if="item.$infoWindow.$template.types" class="mr-1" color="primary" v-for="type in item.$infoWindow.$template.types" :key="type" :label="type" />
                        </div>
                    </list-group-item>
                </list-group>
            </template>
            <div v-else class="alert alert-warning">
                There is no more data on map!
            </div>
        </overlay>

        <google-map
            :api-key="apiKey"
            width="100%"
            height="100%"
            :latitude="latitude"
            :longitude="longitude"
            :options="options"
            @initialize="onInitialized"
            @dragstart="isDragging = true"
            @dragend="isDragging = false"/>
    </div>
</template>

<script>

import { each } from 'lodash';
import { clone } from 'lodash';
import { extend } from 'lodash';
import { isNumber } from 'lodash';
import { camelCase } from 'lodash';
import { findIndex } from 'lodash';
import Badge from '@/Toolbox/Components/Badge';
import GoogleMap from '@/Toolbox/Maps/GoogleMap';
import BaseField from '@/Toolbox/Forms/BaseField';
import Overlay from '@/Toolbox/Components/Overlay';
import InputField from '@/Toolbox/Forms/InputField';
import FormControl from '@/Toolbox/Mixins/FormControl';
import ListGroup from '@/Toolbox/ListGroup/ListGroup';
import TextareaField from '@/Toolbox/Forms/TextareaField';
import ListGroupItem from '@/Toolbox/ListGroup/ListGroupItem';
import ButtonDropdown from '@/Toolbox/Dropdowns/ButtonDropdown';
import GoogleMapOptions from '@/Toolbox/Mixins/GoogleMapOptions';
import GoogleMapInfoWindow from '@/Toolbox/Maps/GoogleMapInfoWindow';
import ActivityButton from '@/Toolbox/ActivityIndicators/ActivityButton';

import Marker from '@/Toolbox/Maps/Symbols/Marker';
import Polygon from '@/Toolbox/Maps/Symbols/Polygon';

export default {

    name: 'google-map-field',

    extends: BaseField,

    mixins: [FormControl, GoogleMapOptions],

    components: {
        Badge,
        Overlay,
        GoogleMap,
        InputField,
        TextareaField,
        ActivityButton,
        ListGroup,
        ListGroupItem,
        ButtonDropdown
    },

    props: {

        /**
         * The maximum number of symbols allowed on the map.
         *
         * @property String
         */
        max: Number,

        /**
         * The minimum number of symbols allowed on the map.
         *
         * @property String
         */
        // min: Number,

        /**
         * The field value attribute.
         *
         * @property String
         */
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }

    },

    watch: {

        value: function(value) {
            this.fitBounds();
        },

        drawingMode: function(value) {
            if(value) {
                each(this.value, symbol => {
                    if(symbol !== value) {
                        symbol.$infoWindow.close();
                    }
                });
            }
        }

    },

    methods: {

        data(item, key) {
            return item.data[key] || item.infoWindow.template[key];
        },

        showSearch() {
            this.isShowingSearch = true;
        },

        hideSearch() {
            this.query = null;
            this.results = null;
            this.isShowingSearch = false;
        },

        showList() {
            if(this.value.length) {
                this.isShowingList = true;
            }
        },

        hideList() {
            this.isShowingList = false;
        },

        editSelected(event) {
            if(this.selected.length === 1) {
                this.selected[0].update();
            }
        },

        deleteSelected() {
            each(this.selected, selected => {
                selected.delete();
            });

            this.selected = [];
        },

        toggleSelect(item) {
            const index = findIndex(this.selected, item);

            if(index !== -1) {
                this.selected.splice(index, 1);
            }
            else {
                this.selected.push(item);
            }
        },

        nearbyPlaces(location, request) {
            return new Promise((resolve, reject) => {
                this.places.nearbySearch(extend({
                    location: location,
                    radius: '500'
                }, request), function(response, status) {
                    if(status === google.maps.places.PlacesServiceStatus.OK) {
                        resolve(response)
                    } else {
                        reject(status)
                    }
                });
            });
        },

        findPlace(placeId) {
            this.isFindingPlace = true;

            return new Promise((resolve, reject) => {
                this.places.getDetails({
                    placeId: placeId
                }, function(response, status) {
                    if(google.maps.places.PlacesServiceStatus.OK) {
                        resolve(response)
                    } else {
                        reject(status)
                    }
                });
            });
        },

        geocode(query) {
            this.isGeocoding = true;

            return new Promise((resolve, reject) => {
                const data = {}, isLatLng = query instanceof google.maps.LatLng;

                if(!query.geometry) {
                    this.geocoder.geocode({
                        location: isLatLng ? query : null,
                        address: !isLatLng ? query : null
                    }, (results, status) => {
                        if (status == google.maps.GeocoderStatus.OK) {
                            resolve(results);
                        } else {
                            reject(status)
                        }

                        this.isGeocoding = false;
                    });
                } else {
                    resolve(query);
                }
            });
        },

        fitBounds() {
            if(this.value.length) {
                const bounds = new google.maps.LatLngBounds();

                each(this.value, obj => {
                    obj.extendBounds(bounds);
                });

                this.map.fitBounds(bounds);
            }
            else {
                this.map.setZoom(this.zoom);
                this.map.setCenter({
                    lat: this.latitude,
                    lng: this.longitude
                });
            }
        },

        onSubmit(event, query) {
            this.geocode(query).then(results => {
                if(results.length > 1) {
                    this.results = results;
                }
                else {
                    this.onClickResult(event, results[0]);
                }
            }, error => {
                this.results = null;
                this.$emit('update:errors', {
                    query: error
                });
            });
        },

        onInitialized(instance) {
            this.isLoaded = true;
            this.map = instance.map;
            this.geocoder = new google.maps.Geocoder();
            this.places = new google.maps.places.PlacesService(this.map);
            this.$emit('initialize', this);
        },

        onActionClick(event) {
            this.lastSelectedAction.onClick(event);
        },

        onItemClick(event, item) {
            this.lastSelectedAction = item;
        },

        onClickResult(event, result) {
            if(this.lastSelectedAction) {
                this.lastSelectedAction.onClick(event, result);
            }
            else {
                this.mapDropdownItems[0].onClick(event, result);
            }

            this.hideSearch();
        },

        onClickCancel(event) {
            this.drawingMode.cancel();
        },

        onClickSave(event) {
            this.drawingMode.save();
        }

    },

    computed: {

        mapDropdownItems() {
            return [{
                label: 'Add Marker',
                onClick: (event, result) => {
                    if(result && result.geometry.location) {
                        result = result.geometry.location;
                    }

                    const marker = new Marker(this, {
                        drawingMode: true,
                        position: result || this.map.getCenter()
                    });

                    marker.$infoWindow.open(marker.$symbol);

                    const value = clone(this.value);

                    value.push(marker);

                    this.$emit('update:value', value);
                }
            },{
                label: 'Add Polygon',
                onClick: (event, result) => {
                    if(result && result.geometry.location) {
                        result = result.geometry.location;
                    }

                    const polygon = new Polygon(this, {
                        drawingMode: true
                    });

                    const value = clone(this.value);

                    value.push(polygon);

                    this.$emit('update:value', value);
                }
            }];
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

    data() {
        return {
            map: null,
            //mapData: this.value || [],
            formData: {},
            lastSelectedAction: null,
            query: null,
            results: null,
            places: null,
            geocoder: null,
            selected: [],
            drawingMode: false,
            isLoaded: false,
            isDragging: false,
            isGeocoding: false,
            isShowingForm: false,
            isShowingList: false,
            isFindingPlace: false,
            isShowingSearch: false
        };
    }

}

</script>

<style lang="scss">
    .google-map-field {
        overflow: hidden;
        position: relative;

        .google-map-field-controls {
            position: absolute;
            bottom: 100%;
            z-index: 1;
            padding: $font-size-base / 2;
            transition: all .25s ease-out;

            & .btn {
                text-transform: capitalize;
            }

            &.show {
                transform: translateY(100%);

                &:not(.show-immediately) {
                    transition-delay: 1s;
                }
            }

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
            }
        }

        .google-map-search-field {
            width: 100%;
            display: flex;;
            flex-shrink: 0;
            align-items: center;
            flex-direction: row;

            & > input {
                width: 100%;
                border: 0;
                outline: 0;
                background: transparent;
                padding: $font-size-base $font-size-base $font-size-base * .5;
                margin-bottom: $font-size-base * .75;
                margin-right: $font-size-base * 2;
                font-size: $font-size-base * 2.5;
                border-bottom: 1px solid $gray-400;
            }

            .btn {
                font-size: $font-size-base * 2;
            }

            &::placeholder {
                color: $gray-600;
            }
        }

        .google-map-search-results {
            width: 100%;
            flex-shrink: 0;
            font-size: $font-size-base * 1.25;
            padding: $font-size-base * 2 0;

            & > ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            & > p {
                font-size: $font-size-base * 1.5;
                padding: 0 $font-size-base / 2;
            }

            .list-group-item {
                // background: transparent;
            }

            .google-map-search-result {
                display: block;
                text-decoration: none;
                padding: $font-size-base / 2;

                &:hover {
                    background: $gray-200;
                }
            }
        }
    }

</style>
