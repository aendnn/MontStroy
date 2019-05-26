'use strict';
setTimeout(function(){
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.0/?apikey=ec1eb4b4-3ffe-4975-a696-b52dc7702801&load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);


function getYaMap(){
  var myMap = new ymaps.Map("map", {
    center: [55.63150204, 37.61708150],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([55.63172696, 37.61765126], {hasBaloon: false},{
    iconLayout: 'default#image',
    iconImageHref: '../img/icon-marker.svg',
    iconImageSize: [30, 36]
  });

  myMap.geoObjects.add(myPlacemark);
}
