// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.79289181, 49.11301626],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });
      
        myMap.behaviors.disable([
          'scrollZoom'
        ]);
      
        var myPin = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/mypin.png',
          iconImageSize: [37, 37],
          iconImageOffset: [-3, -42]
        });
      
        var myPlacemark1 = new ymaps.Placemark([55.79622820, 49.11434664], {
          balloonContentHeader: 'Театр',
          balloonContentBody: 'В студеную зимнюю пору',
          balloonContentFooter: 'Мы пошли в гору',
          hintContent: 'Зимние происшествия'
        });
      
        var myPlacemark2 = new ymaps.Placemark([55.79543040, 49.10692229], {
          balloonContentHeader: 'Метро',
          balloonContentBody: 'В студеную зимнюю пору',
          balloonContentFooter: 'Мы пошли в гору',
          hintContent: 'Зимние происшествия'
        });
      
        myPin.add(myPlacemark1).add(myPlacemark2);
        myMap.geoObjects.add(myPin);
    }