import { clearMainContent } from "../clearContent";

function loadContactPage() {
    clearMainContent();

    const content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.classList.add('contact-page');

    const mainContent = document.getElementById('main-content');

    const contactTextContainer = document.createElement('div');
    const contactHeading = document.createElement('h1');
    const contactContainer = document.createElement('div');

    const addressDiv = document.createElement('div');
    const contactDetailsDiv = document.createElement('div');
    const openHourDiv = document.createElement('div');

    const addressHeading = document.createElement('h2');
    const contactDetailsHeading = document.createElement('h2');
    const openHourHeading = document.createElement('h2');
    const addressDesc = document.createElement('p');
    const contactDetailsDesc = document.createElement('p');
    const openHourDesc = document.createElement('p');

    contactTextContainer.classList.add('contact-text-container');
    contactHeading.classList.add('contact-heading');
    contactContainer.classList.add('contact-container');

    addressDiv.classList.add('grid-div');
    contactDetailsDiv.classList.add('grid-div');
    openHourDiv.classList.add('grid-div');

    addressHeading.classList.add('contact-h2-headings', 'h2-headings');
    contactDetailsHeading.classList.add('contact-h2-headings', 'h2-headings');
    openHourHeading.classList.add('contact-h2-heading', 'h2-headings');

    addressDesc.classList.add('descriptions');
    contactDetailsDesc.classList.add('descriptions');
    openHourDesc.classList.add('descriptions');

    contactHeading.textContent = "Want to know more? Get in touch with us.";

    addressHeading.textContent = "Address";
    contactDetailsHeading.textContent = "Contact Us";
    openHourHeading.textContent = "Opening Hours";

    addressDesc.textContent = "123 Maple Street. Anytown, PA 17101";
    contactDetailsDesc.innerHTML = 'Email: info@uncooked.com<br>Phone: +1 (555) 123-4567';
    openHourDesc.innerHTML = "Monday - Friday: 8am - 6pm<br>Saturday - Sunday: 9am - 5pm";


    addressDiv.appendChild(addressHeading);
    addressDiv.appendChild(addressDesc);

    contactDetailsDiv.appendChild(contactDetailsHeading);
    contactDetailsDiv.appendChild(contactDetailsDesc);

    openHourDiv.appendChild(openHourHeading);
    openHourDiv.appendChild(openHourDesc);

    contactContainer.appendChild(addressDiv);
    contactContainer.appendChild(contactDetailsDiv);
    contactContainer.appendChild(openHourDiv);

    contactTextContainer.appendChild(contactHeading);
    contactTextContainer.appendChild(contactContainer);

    mainContent.appendChild(contactTextContainer);
}

export { loadContactPage };