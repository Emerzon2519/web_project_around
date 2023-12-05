let popup = document.querySelector(".popup");
let edit = document.querySelector(".header__icono");
let hidden = document.querySelector(".close");
let title = document.querySelector(".header__title");
let subtitle = document.querySelector(".header__subtitle");
let saveInfo = document.querySelector(".popup__button-container");

let inputName = document.querySelector(".popup__input-name");
let inputWork = document.querySelector(".popup__input-work");

function open() {

    popup.classList.toggle("popup_show");
    
    titleCapture = title.textContent;
    inputName.value = titleCapture;

    subtitleCapture = subtitle.textContent;
    inputWork.value = subtitleCapture;
}
 
function closee() {
    popup.classList.remove("popup_show");
}

function save(){

    popup.classList.remove("popup_show");

    nameCapture = inputName.value
    title.textContent = nameCapture

    workCapture = inputWork.value
    subtitle.textContent = workCapture

}

edit.addEventListener("click",open); 

hidden.addEventListener("click",closee);
saveInfo.addEventListener("click",save);