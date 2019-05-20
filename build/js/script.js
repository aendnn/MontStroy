'use strict';
var mainNav = document.querySelector('.site-nav');
var mainToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('site-nav--nojs');

mainToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('site-nav--closed')) {
    mainNav.classList.remove('site-nav--closed');
    mainNav.classList.add('site-nav--opened');
  } else {
    mainNav.classList.add('site-nav--closed');
    mainNav.classList.remove('site-nav--opened');
  }
});


var linkCon = document.querySelectorAll('[href^="#feedback"]'), //выбираем все ссылки к якорю на странице
  V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkCon.length; i++) {
  linkCon[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset,  // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
    var t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}


