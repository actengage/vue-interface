import Vue from 'vue';
import { each } from 'lodash';
import { extend } from 'lodash';
import { isArray } from 'lodash';
import { findIndex } from 'lodash';
import { isUndefined } from 'lodash';
import MapSymbol from './MapSymbol';
import InfoWindow from './InfoWindow';
import MarkerForm from '@/Toolbox/Maps/Forms/MarkerForm';

export default class Marker extends MapSymbol {

    initialize(options) {
        this.$places = null;
        this.$results = null;
        this.$vue.drawingMode = this;
        this.$listener = this.$vue.map.addListener('click', event => {
            this.onMapClick(event);
        });

        const position = this.$vue.map.getCenter();
        const polygon = new google.maps.Polygon(extend({
            map: this.$vue.map,
            draggable: true
        }, options));

        polygon.addListener('drag', event => {
            polygon.getPath().forEach((point, i) => {
                this.$vue.map.$drawingPoints[i].setPosition(point);
            });
        });

        this.$infoWindow = new InfoWindow(this.$vue);
        this.$infoWindow.$data = this.$data;
        this.$infoWindow.$template.activity = true;
        this.$infoWindow.$template.$on('click:edit', event => this.update());
        this.$infoWindow.$template.$on('click:delete',  event => this.delete());

        this.$vue.geocode(position).then(results => {
            this.$results = results;
            this.$infoWindow.update(results[0]);
        });

        return polygon;
    }

    events() {
        return {
            'click': event => {
                // Open the InfoWindow
                this.$infoWindow.open(this.$symbol);

                // Trigger the marker:click event on the parent Vue instance.
                this.$vue.$emit('polygon:click', event, this);
            },
            'dragstart': event => {
                this.$vue.$isDragging = true;
            },
            'dragend': event => {
                this.$vue.$isDragging = false;
            }
        }
    }

    extendBounds(bounds) {
        bounds.union(this.$vue.map.getBounds());
    }

    update() {

    }

    delete() {
        each(this.$vue.map.$drawingPoints, marker => {
            marker.setMap(null);
        });

        super.delete();
        this.$vue.map.$drawingPoints = [];
        this.$vue.$emit('polygon:removed', this);
        google.maps.event.removeListener(this.$listener);
    }

    resizeDrawing() {
        if(isArray(this.$vue.map.$drawingPoints) && this.$vue.map.$drawingPoints.length > 1) {
            this.$symbol.setPaths(this.$vue.map.$drawingPoints.map(point => point.getPosition()));
        }
    }

    onMapClick(event) {
        const marker = new google.maps.Marker({
            map: this.$vue.map,
            zIndex: 2,
            draggable: true,
            position: event.latLng,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: 'red',
                fillOpacity: .8,
                strokeColor: 'darkred',
                strokeWeight: 1
            }
        });

        marker.addListener('dblclick', event => {
            this.$vue.map.$drawingPoints.splice(findIndex(this.$vue.map.$drawingPoints, marker), 1);
            console.log(this.$vue.map.$drawingPoints.map(marker => marker.getPosition()));
            this.$symbol.setPath(this.$vue.map.$drawingPoints.map(marker => marker.getPosition()));
            marker.setMap(null);
        });

        marker.addListener('drag', event => {
            this.resizeDrawing();
        });

        if(!isArray(this.$vue.map.$drawingPoints)) {
            this.$vue.map.$drawingPoints = [marker];
        }
        else {
            this.$vue.map.$drawingPoints.push(marker);
            this.resizeDrawing();
        }
    }

}
