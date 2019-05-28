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


var linkCon = document.querySelectorAll('.scroll'),
  V = 0.3;
for (var i = 0; i < linkCon.length; i++) {
  linkCon[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, '$1');
    var t = document.querySelector(hash).getBoundingClientRect().top,
      start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

svg4everybody();

objectFitImages('img');

var currentBreakpoint = '';
var swiper;
var swiperFeatures;

var desktopSwiperConfig = {
  init: false,
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.arrow--partners-next',
    prevEl: '.arrow--partners-prev',
  },
};

var desktopSwiperConfigFeatures = {
  init: false,
  slidesPerView: 'auto',
  on: {
    resize: function () {
      if (window.matchMedia('(min-width: 1200px)').matches) { this.destroy(); }
    }
  }
};

var tabletSwiperConfig = {
  init: false,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  pagination: {
    el: '.partners__toggles',
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }
};

var tabletSwiperConfigFeatures = {
  init: false,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  pagination: {
    el: '.features__toggles',
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }
};


var mobileSwiperConfig = {
  init: false,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.partners__toggles',
    clickable: true,
  },
};

var mobileSwiperConfigFeatures = {
  init: false,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.features__toggles',
    clickable: true,
  },
};

function initSwiper () {
  if (window.matchMedia('(max-width: 767px)').matches && currentBreakpoint !== 'mobile') {
    currentBreakpoint = 'mobile';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', mobileSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
    swiperFeatures = new Swiper('.swiper-container-features', mobileSwiperConfigFeatures);
    swiperFeatures.init();
  }

  if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches && currentBreakpoint !== 'tablet') {
    currentBreakpoint = 'tablet';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', tabletSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
    swiperFeatures = new Swiper('.swiper-container-features', tabletSwiperConfigFeatures);
    swiperFeatures.init();
  }

  if (window.matchMedia('(min-width: 1200px)').matches && currentBreakpoint !== 'desktop') {
    currentBreakpoint = 'desktop';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', desktopSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
    swiperFeatures = new Swiper('.swiper-container-features', desktopSwiperConfigFeatures);
    swiperFeatures.init();
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);
