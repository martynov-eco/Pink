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

/* Индекс слайда по умолчанию */
var slideIndex = 2;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__dots-item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__dots-item--active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slider__dots-item--active";
}
