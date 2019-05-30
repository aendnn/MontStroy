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

var servicesToggles = document.querySelectorAll('.service__title');
var servicesList = document.querySelectorAll('.service__links');

for (var toggle of servicesToggles) {
  toggle.addEventListener('click', function () {
    if (this.classList.contains('service__title--active')) {
      this.classList.remove('service__title--active');
      this.nextElementSibling.classList.remove('service__links--opened');
      this.nextElementSibling.classList.add('service__links--closed');
    }
    else {
      this.classList.add('service__title--active');
      this.nextElementSibling.classList.remove('service__links--closed');
      this.nextElementSibling.classList.add('service__links--opened');
    }
  })
}

for (var services of servicesList) {
  document.addEventListener('click', function(event) {
    var isClickInside = this.contains(event.target);

    if (!isClickInside) {
      this.classList.remove('service__links--opened');
    }
  });
  services.classList.remove('service__links--nojs');
}

/*for (var services of servicesList) {
  services.classList.remove('service__links--nojs');

  if (toggle.classList.contains('service__title--active')) {
    if (services.classList.contains('service__links--opened')) {
      toggle.nextElementSibling.classList.remove('service__links--opened');
      toggle.nextElementSibling.classList.add('service__links--closed');
    }
  }
  else {
    toggle.nextElementSibling.classList.add('service__links--opened');
  }
}

/*servicesToggle.addEventListener('click', function () {
  if (servicesList.classList.contains('service__links--closed')) {
    servicesList.classList.remove('service__links--closed');
    servicesList.classList.add('service__links--opened');
    servicesIsActive.classList.add('service__wrap--active');
  } else {
    servicesList.classList.add('service__links--closed');
    servicesList.classList.remove('service__links--opened');
    servicesIsActive.classList.remove('service__wrap--active');
  }
});

*/
var linkCon = document.querySelectorAll('.scroll');
var V = 0.3;
for (var i = 0; i < linkCon.length; i++) {
  linkCon[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset;
    var hash = this.href.replace(/[^#]*(.*)/, '$1');
    var t = document.querySelector(hash).getBoundingClientRect().top;
    var start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        (start = time);
      }
      var progress = time - start;
      var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r !== w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

svg4everybody();
objectFitImages('img');
