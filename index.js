const popup = document.querySelector(".popup");
const titleHeader = document.querySelector(".header__title");
const subtitle = document.querySelector(".header__subtitle");


const inputName = document.querySelector(".popup__input-name");
const inputWork = document.querySelector(".popup__input-work");


const originalTwoTitle = popup.querySelector(".popup__title").textContent;
const twoTitle = popup.querySelector(".popup__title");

let isEditMode = false;

document.addEventListener('DOMContentLoaded', function () {
    
    const mainContainer = document.querySelector('.main__container');   
    const cardTemplate = document.querySelector('.template-card');

    
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

    initialCards.forEach(function (cardData) {
        
        const newCard = cardTemplate.content.cloneNode(true);
        const title = newCard.querySelector('.main__title');
        const image = newCard.querySelector('.main__images');

        title.textContent = cardData.name;
        image.src = cardData.link;
        image.alt = cardData.name;
        mainContainer.appendChild(newCard);
    });



    const iconHearts = document.querySelectorAll(".main__icono");
    const buttonAdd = document.querySelector(".header__container-button");
    const edit = document.querySelector(".header__icono");
    const hidden = document.querySelector(".popup__close");
    const saveInfo = document.querySelector(".popup__button-container");
    const iconsEliminar = document.querySelectorAll(".main__icon-eliminar");
    
    function open() {
        isEditMode = true;
        popup.classList.toggle("popup_show");
        const titleCapture = titleHeader.textContent;
        inputName.value = titleCapture;
        
        const subtitleCapture = subtitle.textContent;
        inputWork.value = subtitleCapture;
        twoTitle.textContent = originalTwoTitle;
    }
    
    function closee() {
        popup.classList.remove("popup_show");
        
            // inputName.value = "";
            // inputWork.value = "";
            // inputName.style.color = "initial";
            // inputWork.style.color = "initial";
        
    }


    
    function save(){
        if(isEditMode) {
            const nameCapture = inputName.value
            titleHeader.textContent = nameCapture
            
            const workCapture = inputWork.value
            subtitle.textContent = workCapture
        } else {
            // const mainContainer = document.querySelector('.main__container');   
            // const cardTemplate = document.querySelector('.template-card');
            const newCard = cardTemplate.content.cloneNode(true);
            const title = newCard.querySelector('.main__title');
            const image = newCard.querySelector('.main__images');
            
            title.textContent = inputName.value;
            image.src = inputWork.value;
            image.alt = inputName.value;
    
            mainContainer.prepend(newCard);
        }
        
        popup.classList.remove("popup_show");
        
    }
    
    function addCard() {
        isEditMode = false;
         popup.classList.toggle("popup_show");
         
         inputName.value = "";
         twoTitle.textContent = "New Place";
         inputWork.value = "";
         inputName.placeholder = "Title";
         inputWork.placeholder = "Image URL";

     }
        
    
        function like(event) {
            if (event.target.src.endsWith("corazon-negro.svg")) {
                event.target.src = "./images/icono-corazon.svg";
            } else {
                event.target.src = "./images/corazon-negro.svg";
            }
        }
    
        iconHearts.forEach(function(iconHeart) {
                iconHeart.addEventListener("click", like);
        });
    
    
        function eliminate(event) {
            const card = event.target.closest(".main__element");
            if(card){
                card.remove();
            }
        }
    
        iconsEliminar.forEach(function(iconEliminar){
            iconEliminar.addEventListener("click", eliminate);
        })
    
        const modal = document.querySelector(".modal");
        const modalImg = document.querySelector(".modal__content");
        const images = document.querySelectorAll('.main__images');
        const span = document.querySelector(".modal__close");
    
        function openModal() {
            modal.classList.toggle("modal_show");
            modalImg.src = this.src;
    
            const imageName = this.alt;
            
    
            const imageNameElement = document.querySelector(".modal__image-name");
            imageNameElement.textContent = imageName;
        }
    
        function closeModal() { 
            modal.classList.remove("modal_show");
        }
    
        images.forEach(function(img) {
            img.addEventListener("click", openModal);
        });
    
    
        span.addEventListener("click", closeModal);
        buttonAdd.addEventListener("click", addCard);   
        edit.addEventListener("click",open); 
        hidden.addEventListener("click",closee);
        saveInfo.addEventListener("click",save);
    }
    
    
);






