const discoverButton = document.querySelector(".main_interaction");
const webBackgroundImage = document.querySelector(".main_product-image-web_background");
const movilBackgroundImage = document.querySelector(".main_product-image-movil_background");
const headerBox = document.querySelector(".header");
const firstMainCopy = document.querySelector(".main_copy");
const secondMainCopy = document.querySelector(".main_copy-discover");
const callToActionBox = document.querySelector(".main_description-and-call-to-action");
console.log(callToActionBox);

discoverButton.addEventListener("click", () => {
    webBackgroundImage.classList.toggle("discover");
    movilBackgroundImage.classList.toggle("discover");
    headerBox.classList.toggle("discover");
    firstMainCopy.classList.toggle("discover");
    discoverButton.classList.toggle("discover");
    secondMainCopy.classList.toggle("discover");
    callToActionBox.classList.toggle("discover");
});

const buttons = document.getElementsByTagName("button");
console.log(buttons);

buttons[0].addEventListener("mouseenter", () => {
    buttons[0].classList.toggle("hover");
});

buttons[0].addEventListener("mouseleave", () => {
    buttons[0].classList.remove("hover");
});

buttons[1].addEventListener("mouseenter", () => {
    buttons[1].classList.toggle("hover");
});

buttons[1].addEventListener("mouseleave", () => {
    buttons[1].classList.remove("hover");
});

buttons[2].addEventListener("mouseenter", () => {
    buttons[2].classList.toggle("hover");
});

buttons[2].addEventListener("mouseleave", () => {
    buttons[2].classList.remove("hover");
});