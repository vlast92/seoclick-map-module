"use strict";

function YandexMap(params) {

    let map = new ymaps.Map(params.id, {
        center: params.centerCoord,
        zoom: params.zoom,
        controls: []
    });

    if(!params.wheel_zoom) map.behaviors.disable('scrollZoom');

    this.addPlace = (params) => {

        for(let i = 0; i < params.length; i++){
            console.log(params);
            let placemark = new ymaps.Placemark([params[i].position.lat, params[i].position.lng],{
                hintContent: params[i].name,
                balloonContent: params[i].infoWindowContent
            });
            map.geoObjects.add(placemark);
        }
    };

    this.addControl = (params) => {

        map.controls.add(params);
    };

    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        addControl: this.addControl,
        addPlace: this.addPlace/*,
        clearMarkers: this.clearMarkers*/
    };
}