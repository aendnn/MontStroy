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
  slidesPerView: 3,
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
  slidesPerView: 3,
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

function initSwiper() {
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
