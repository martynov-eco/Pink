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
