/*var feedBack = document.querySelector(".button-write-us");
var feedBackModal = document.querySelector(".modal-write-us");
var closeFeedBack = feedBackModal.querySelector(".modal-close");
var userName = feedBackModal.querySelector("[name=users-name]");
var userEmail = feedBackModal.querySelector("[name=users-email]");
var userMessage = feedBackModal.querySelector("[name=users-message]");
var form = feedBackModal.querySelector("form");

feedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.add("modal-show");
		userName.focus();
});

closeFeedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.remove("modal-show");
		feedBackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
				evt.preventDefault();
				if (feedBackModal.classList.contains("modal-show")) {
						feedBackModal.classList.remove("modal-show");
						feedBackModal.classList.remove("modal-error");
				}
		}
});

form.addEventListener("submit", function (evt) {
		if (!userName.value || !userEmail.value || !userMessage) {
				evt.preventDefault();
				feedBackModal.classList.remove("modal-error");
				feedBackModal.offsetWidth = feedBackModal.offsetWidth;
				feedBackModal.classList.add("modal-error");
		}
});*/



var submitButton = document.querySelector(".form__button");
var submitModal = document.querySelector(".modal-accept");
var requiredModal = document.querySelector(".modal-required")
var closeSubmitModal = document.querySelector(".modal-accept__button");
var closeRequiredModal = document.querySelector(".modal-required__button");
var form = document.querySelector(".form__wrapper");
var userSurame = document.querySelector("[name=surname]");
var userName = document.querySelector("[name=name]");
var userEmail = document.querySelector("[name=email]");


form.addEventListener("submit", function (evt) {
  if (!userName.value || !userSurname.value || !userEmail.value) {
      evt.preventDefault();
      requiredModal.classList.add("modal-required--open");
  } else {
    evt.preventDefault();
    submitModal.classList.add("modal-accept--open");
  }
});

closeSubmitModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  submitModal.classList.remove("modal-accept--open");
});

closeRequiredModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  requiredModal.classList.remove("modal-required--open");
});

