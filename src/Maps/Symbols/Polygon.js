import Vue from 'vue';
import { each } from 'lodash';
import { extend } from 'lodash';
import { isArray } from 'lodash';
import { findIndex } from 'lodash';
import { isUndefined } from 'lodash';
import MapSymbol from './MapSymbol';
import InfoWindow from './InfoWindow';
import InfoWindowForm from '@/Toolbox/Maps/InfoWindowForm';

export default class Polygon extends MapSymbol {

    initialize(params) {
        if(params.paths) {
            this.$originalValue = params.paths;
        }

        if(this.$vue.drawingMode === this) {
            this.$listener = this.$vue.map.addListener('click', event => {
                this.onMapClick(event);
            });
        }

        return new google.maps.Polygon({
            map: this.$vue.map,
            paths: params.paths || [],
            draggable: this.$vue.drawingMode === this
        });
    }

    events() {
        return {
            'click': event => {
                if(this.$vue.drawingMode !== this) {
                    this.$listener = this.$vue.map.addListener('click', event => {
                        this.onMapClick(event);
                    });

                    this.$vue.drawingMode = this;
                    this.$symbol.setDraggable(true);
                    this.$symbol.getPath().forEach(point => {
                        this.onMapClick({
                            latLng: point
                        });
                    });
                }
                else {
                    // Open the InfoWindow
                    this.$infoWindow.$symbol.setPosition(this.getCenter());
                    this.$infoWindow.open(this.$symbol);
                    this.updateInfoWindow(this.getCenter());
                }
            },
            'drag': event => {
                this.$infoWindow.$symbol.setPosition(this.getCenter());
                this.$symbol.getPath().forEach((point, i) => {
                    this.$drawingPoints[i].setPosition(point);
                });
            },
            'dragstart': event => {
                this.$vue.$isDragging = true;
            },
            'dragend': event => {
                this.$vue.$isDragging = false;
                this.updateInfoWindow(this.getCenter());
            }
        };
    }

    cancel() {
        each(this.$drawingPoints, point => {
            point.setMap(null);
        });

        if(this.$originalValue) {
            this.$symbol.setPath(this.$originalValue);
        }

        super.cancel();
    }

    save() {
        this.updateInfoWindow(this.getCenter());

        each(this.$drawingPoints, point => {
            point.setMap(null);
        });

        this.$originalValue = this.$symbol.getPath();

        super.save();
    }

    delete() {
        each(this.$drawingPoints, marker => {
            marker.setMap(null);
        });

        super.delete();
    }

    getBounds() {
        const bounds = new google.maps.LatLngBounds();
        const path = this.$symbol.getPath();

        if(path) {
            path.forEach(point => {
                bounds.extend(point);
            });
        }
        else {
            bounds.union(this.$vue.map.getBounds());
        }

        return bounds;
    }

    getCenter() {
        return this.getBounds().getCenter();
    }

    extendBounds(bounds) {
        bounds.union(this.getBounds());
    }

    resizeDrawing() {
        if(isArray(this.$drawingPoints) && this.$drawingPoints.length > 1) {
            this.$symbol.setPaths(this.$drawingPoints.map(point => point.getPosition()));
            this.$infoWindow.$symbol.setPosition(this.getCenter());
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
            this.$drawingPoints.splice(findIndex(this.$drawingPoints, marker), 1);
            this.$symbol.setPath(this.$drawingPoints.map(marker => marker.getPosition()));
            marker.setMap(null);
        });

        marker.addListener('drag', event => {
            this.resizeDrawing();
        });

        if(!isArray(this.$drawingPoints)) {
            this.$drawingPoints = [marker];
        }
        else {
            this.$drawingPoints.push(marker);
            this.resizeDrawing();
        }
    }

}
