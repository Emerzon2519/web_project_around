let page = document.querySelector(".page");
let popup = document.querySelector(".popup");
let edit = document.querySelector(".header__icono");
let hidden = document.querySelector(".close");
let title = document.querySelector(".header__title");
let subtitle = document.querySelector(".header__subtitle");
let saveInfo = document.querySelector(".popup__button-container");

let inputName = document.querySelector(".popup__input-name");
let inputWork = document.querySelector(".popup__input-work");

function open() {

    popup.style.display = "block";
    hidden.style.display = "block";
    // page.style.opacity = "0.9";
    
    titleCapture = title.textContent;
    inputName.value = titleCapture;

    subtitleCapture = subtitle.textContent;
    inputWork.value = subtitleCapture;
}
 
function closee() {
    popup.style.display = "none";
    hidden.style.display = "none";
}

function save(){

    popup.style.display = "none";
    hidden.style.display = "none";

    nameCapture = inputName.value
    title.textContent = nameCapture

    workCapture = inputWork.value
    subtitle.textContent = workCapture

}

edit.addEventListener("click",open); 

hidden.addEventListener("click",closee);
saveInfo.addEventListener("click",save);