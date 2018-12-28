"use strict";

function YandexMap(params) {

    var map = new ymaps.Map(params.id, {
        center: params.centerCoord,
        zoom: params.zoom,
        controls: []
    });

    this.addPlace = function (params) {

        for (var i = 0; i < params.length; i++) {
            console.log(params);
            var placemark = new ymaps.Placemark([params[i].position.lat, params[i].position.lng], {
                hintContent: params[i].name,
                balloonContent: params[i].infoWindowContent
            });
            map.geoObjects.add(placemark);
        }
    };

    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        // addControl: this.addControl,
        addPlace: this.addPlace /*,
                                clearMarkers: this.clearMarkers*/
    };
}
//# sourceMappingURL=yandex.js.map