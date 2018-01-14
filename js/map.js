/////////map/////////

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [56.522148, 84.932548],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Мегарайон «Южные Ворота» ул. Грачёва, 1',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/Vector_map.png',
        // Размеры метки.
        iconImageSize: [30, 39],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    }),

    myPlacemarkWithContent = new ymaps.Placemark([56.522148, 84.932548], {
        hintContent: 'ЖК «Радонежский» ул. Трудовая, 22 \ 1 (усл)',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../img/Vector_map.png',
        // Размеры метки.
        iconImageSize: [30, 39],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
     myPlacemarkWithContent = new ymaps.Placemark([56.580134, 84.913531], {
        hintContent: 'Микрорайон «Зелёные горки» ул. Дизайнеров, (КПД 21)',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../img/Vector_map.png',
        // Размеры метки.
        iconImageSize: [30, 39],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
      

myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});