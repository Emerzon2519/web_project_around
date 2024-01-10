

function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const saveInfo = document.querySelector(config.submitButtonSelector);
    const inactiveButtonClass = config.inactiveButtonClass;
    const inputErrorClass = config.inputErrorClass;
    const errorClass = config.errorClass;
  
    form.addEventListener("input", (event) => {
      handleInput(event, form, saveInfo, inactiveButtonClass);
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  
    function handleInput(event, form, saveInfo, inactiveButtonClass) {
      const target = event.target;
      const errorNode = form.querySelector(`.${errorClass}_${target.name}`);
      if (target.validity.valid) {
        target.classList.remove(inputErrorClass);
        errorNode.textContent = "";
      } else {
        target.classList.add(inputErrorClass);
        errorNode.textContent = target.validationMessage;
      }
  
      saveInfo.disabled = !isValid(inputList);
      if (saveInfo.disabled) {
        saveInfo.classList.add(inactiveButtonClass);
      } else {
        saveInfo.classList.remove(inactiveButtonClass);
      }
    }
  
    function isValid(inputList) {
      return inputList.every((item) => {
        return item.validity.valid;
      });
    }
  }
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-container",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__error",
    errorClass: "popup__error_visible"
  });