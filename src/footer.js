
function loadFooter() {
    const footerSection = document.createElement('footer');
    const footerPara = document.createElement('p');
    const githubLink = document.createElement('a');
    const odinLink = document.createElement('a');
    const githubLinkText = document.createTextNode('Sahil');
    const odinLinkText = document.createTextNode('Odin.');

    githubLink.appendChild(githubLinkText);
    odinLink.appendChild(odinLinkText);
    
    githubLink.title = "@SahilCreate_";
    odinLink.title = "The Odin Project";

    githubLink.href = "https://github.com/Sahilcreate/restaurant-page";
    odinLink.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";

    footerSection.classList.add('footer');
    footerPara.classList.add('para', 'footer-para');
    githubLink.classList.add('link', 'github-link');
    odinLink.classList.add('link', 'odin-link');

    footerPara.appendChild(document.createTextNode('Created by '));
    footerPara.appendChild(githubLink);
    footerPara.appendChild(document.createTextNode(' for '));
    footerPara.appendChild(odinLink);
    
    footerSection.appendChild(footerPara);

    const mainContent = document.getElementById('main-content');
    mainContent.insertAdjacentElement('afterend', footerSection);
}

export { loadFooter };