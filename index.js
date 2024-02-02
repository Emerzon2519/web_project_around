import  FormValidator from "./FormValidator.js";
import Card  from './Card.js';
import { open, closee, save,addCard,closeModal, handleKeyPress, closeWindows} from "./utils.js";
import {popup,inputName,inputWork,modal,span,buttonAdd,edit,hidden,saveInfo,mainContainer,cardTemplate} from "./utils.js";

 

  inputName.addEventListener('keypress', handleKeyPress);
  inputWork.addEventListener('keypress', handleKeyPress);

 

  span.addEventListener("click", closeModal);
  buttonAdd.addEventListener("click", addCard);   
  edit.addEventListener("click",open); 
  hidden.addEventListener("click",closee);
  saveInfo.addEventListener("click",save);
 

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      
      popup.classList.remove("popup_show");
      modal.classList.remove('modal_show');
    }
  });
  
  closeWindows();

    const initialCards = [
      {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
      },
      {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
      },
      {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
      },
      {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
      },
      {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
      },
      {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
      }
    ];
  
    initialCards.forEach(cardData => {
      const newCard = new Card(cardData.name, cardData.link, cardTemplate);
      mainContainer.appendChild(newCard.generateCard());
    });
  
  

     const formValidator = new FormValidator({
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button-container",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__error",
      errorClass: "popup__error_visible"
    }, document.querySelector(".popup__form"));
    
    formValidator.enableValidation();