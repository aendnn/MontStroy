// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
setTimeout(function(){
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function getYaMap(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.63150204, 37.61708150],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([55.63172696, 37.61765126], {hasBaloon: false},{
    iconLayout: 'default#image',
    iconImageHref: '../img/icon-marker.svg',
    iconImageSize: [30, 36]
  });

  myMap.geoObjects.add(myPlacemark);
}
