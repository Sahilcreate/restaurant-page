import { loadHomePage } from "./pages/home";
import { loadMenuPage } from "./pages/menu";
import { loadContactPage } from "./pages/contact";

function addEventListeners() {
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const contactBtn = document.querySelector('.contact-btn');

    homeBtn.addEventListener('click', loadHomePage);
    menuBtn.addEventListener('click', loadMenuPage);
    contactBtn.addEventListener('click', loadContactPage);
}

export { addEventListeners };