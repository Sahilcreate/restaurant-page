

function loadHeader() {

 
    const headerSection = document.createElement('header');


    const siteNavigation = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const logoSection = document.createElement('div');
    const actionNavigation = document.createElement('nav')
    const signInBtn = document.createElement('button');
    const reservationBtn = document.createElement('button');

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    logoSection.textContent = "un·COOKED";
    signInBtn.textContent = "Sign In";
    reservationBtn.textContent = "Reservations";
    
    headerSection.classList.add('header');
    siteNavigation.classList.add('site-nav');
    actionNavigation.classList.add('action-nav')
    homeBtn.classList.add('btn', 'site-nav-btn', 'home-btn');
    menuBtn.classList.add('btn', 'site-nav-btn', 'menu-btn');
    contactBtn.classList.add('btn', 'site-nav-btn', 'contact-btn');
    logoSection.classList.add('logo');
    signInBtn.classList.add('btn', 'action-nav-btn', 'sign-in-btn');
    reservationBtn.classList.add('btn', 'action-nav-btn', 'reservation-btn');
    

    siteNavigation.appendChild(homeBtn);
    siteNavigation.appendChild(menuBtn);
    siteNavigation.appendChild(contactBtn);

    actionNavigation.appendChild(signInBtn);
    actionNavigation.appendChild(reservationBtn);

    headerSection.appendChild(siteNavigation);
    headerSection.appendChild(logoSection);
    headerSection.appendChild(actionNavigation);

    const content = document.getElementById('content');
    const mainContent = document.getElementById('main-content');

    content.insertBefore(headerSection, mainContent);

}

export { loadHeader };