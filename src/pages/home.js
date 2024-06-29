 import { clearMainContent } from "../clearContent";

function loadHomePage() {

    clearMainContent();

    const content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.classList.add('home-page');

    const mainContent = document.getElementById('main-content');

    const heroTextContainer = document.createElement('div');
    const heroHeading = document.createElement('h1');
    const heroSubHeading = document.createElement('p');
    const heroBtn = document.createElement('button');

    heroTextContainer.classList.add('hero-text-container');
    heroHeading.classList.add('hero-heading');
    heroSubHeading.classList.add('hero-sub-heading');
    heroBtn.classList.add('hero-btn', 'btn');

    heroHeading.innerHTML = '<span class="hero-heading-name">Welcome </span>to<br>the <span class="hero-heading-name">un·COOKED</span>';
    heroSubHeading.textContent = "Experience the perfect blend of tradition and innovation with our exquisite menu. Delight in a cozy ambiance, exceptional service, and dishes that tantalize your taste buds. Your journey to gastronomic bliss begins here."
    heroBtn.textContent = "Book your Experience now"

    heroTextContainer.appendChild(heroHeading);
    heroTextContainer.appendChild(heroSubHeading);
    heroTextContainer.appendChild(heroBtn);

    mainContent.appendChild(heroTextContainer);

}

export { loadHomePage };