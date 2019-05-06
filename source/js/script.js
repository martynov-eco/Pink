var navMain = document.querySelector('.page-header__top');
var navToggle = document.querySelector('.page-header__button');

navMain.classList.remove('page-header__top--nojs');
navMain.classList.remove('page-header__top--opened');
navMain.classList.add('page-header__top--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__top--closed')) {
    navMain.classList.remove('page-header__top--closed');
    navMain.classList.add('page-header__top--opened');
  } else {
    navMain.classList.add('page-header__top--closed');
    navMain.classList.remove('page-header__top--opened');
  }
});
