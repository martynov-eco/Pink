ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.939492, 30.322969],
    zoom: 15
  }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Тут мы находимся!'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.svg',
        // Размеры метки.
        iconImageSize: [36, 36],
      });

  myMap.geoObjects
    .add(myPlacemark);
});
