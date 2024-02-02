// function enableValidation(config) {
//     const form = document.querySelector(config.formSelector);
//     const inputList = Array.from(form.querySelectorAll(config.inputSelector));
//     const saveInfo = document.querySelector(config.submitButtonSelector);
//     const inactiveButtonClass = config.inactiveButtonClass;
//     const inputErrorClass = config.inputErrorClass;
//     const errorClass = config.errorClass;
  
//     form.addEventListener("input", (event) => {
//       handleInput(event, form, saveInfo, inactiveButtonClass);
//     });
  
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//     });
  
//     function handleInput(event, form, saveInfo, inactiveButtonClass) {
//       const target = event.target;
//       const errorNode = form.querySelector(`.${errorClass}_${target.name}`);
//       if (target.validity.valid) {
//         target.classList.remove(inputErrorClass);
//         errorNode.textContent = "";
//       } else {
//         target.classList.add(inputErrorClass);
//         errorNode.textContent = target.validationMessage;
//       }
  
//       saveInfo.disabled = !isValid(inputList);
//       if (saveInfo.disabled) {
//         saveInfo.classList.add(inactiveButtonClass);
//       } else {
//         saveInfo.classList.remove(inactiveButtonClass);
//       }
//     }
  
//     function isValid(inputList) {
//       return inputList.every((item) => {
//         return item.validity.valid;
//       });
//     }
//   }
  
//   enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button-container",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__error",
//     errorClass: "popup__error_visible"
//   });

export default class FormValidator {
  constructor(config, formElement) {
    this.form = formElement;
    this.inputList = Array.from(this.form.querySelectorAll(config.inputSelector));
    this.saveInfo = this.form.querySelector(config.submitButtonSelector);
    this.inactiveButtonClass = config.inactiveButtonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.errorClass = config.errorClass;
  }

  handleInput(event) {
    const target = event.target;
    const errorNode = this.form.querySelector(`.${this.errorClass}_${target.name}`);
    if (target.validity.valid) {
      target.classList.remove(this.inputErrorClass);
      errorNode.textContent = "";
    } else {
      target.classList.add(this.inputErrorClass);
      errorNode.textContent = target.validationMessage;
    }

    this.saveInfo.disabled = !this.isValid();
    if (this.saveInfo.disabled) {
      this.saveInfo.classList.add(this.inactiveButtonClass);
    } else {
      this.saveInfo.classList.remove(this.inactiveButtonClass);
    }
  }

  isValid() {
    return this.inputList.every((item) => {
      return item.validity.valid;
    });
  }

  enableValidation() {
    this.form.addEventListener("input", (event) => {
      this.handleInput(event);
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

}

