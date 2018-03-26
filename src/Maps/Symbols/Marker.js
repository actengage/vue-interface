import Vue from 'vue';
import { each } from 'lodash';
import { extend } from 'lodash';
import { indexOf } from 'lodash';
import { isUndefined } from 'lodash';
import MapSymbol from './MapSymbol';
import InfoWindow from './InfoWindow';

export default class Marker extends MapSymbol {

    initialize(params) {
        if(params.position) {
            this.updateInfoWindow(params.position);
        }

        if(!params.drawingMode) {
            this.$originalValue = params.position;
        }

        return new google.maps.Marker({
            map: this.$vue.map,
            position: params.position,
            draggable: this.$vue.drawingMode === this
        });
    }

    events() {
        return {
            'click': event => {
                if(!this.$vue.drawingMode) {
                    this.$vue.drawingMode = this;
                    this.$symbol.setDraggable(true);
                }

                this.$infoWindow.open(this.$symbol);
            },
            'dragstart': event => {
                this.$vue.$isDragging = true;
            },
            'dragend': event => {
                this.$vue.$isDragging = false;
                this.updateInfoWindow(this.$symbol.getPosition());
            }
        };
    }

    cancel() {
        if(this.$originalValue) {
            this.$symbol.setPosition(this.$originalValue);
        }

        super.cancel();
    }

    save() {
        this.$originalValue = this.$symbol.getPosition();

        super.save();
    }

    extendBounds(bounds) {
        bounds.extend(this.$symbol.getPosition());
    }


}
