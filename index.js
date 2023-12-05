const popup = document.querySelector(".popup");
const edit = document.querySelector(".header__icono");
const hidden = document.querySelector(".popup__close");
const title = document.querySelector(".header__title");
const subtitle = document.querySelector(".header__subtitle");
const saveInfo = document.querySelector(".popup__button-container");

const inputName = document.querySelector(".popup__input-name");
const inputWork = document.querySelector(".popup__input-work");

function open() {

    popup.classList.toggle("popup_show");
    
    const titleCapture = title.textContent;
    inputName.value = titleCapture;

    const subtitleCapture = subtitle.textContent;
    inputWork.value = subtitleCapture;
}
 
function closee() {
    popup.classList.remove("popup_show");
}

function save(){

    popup.classList.remove("popup_show");

    const nameCapture = inputName.value
    title.textContent = nameCapture

    const workCapture = inputWork.value
    subtitle.textContent = workCapture

}

edit.addEventListener("click",open); 

hidden.addEventListener("click",closee);
saveInfo.addEventListener("click",save);