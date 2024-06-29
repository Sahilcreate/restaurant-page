
function clearMainContent() {
    const mainContent = document.getElementById('main-content');

    while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

export { clearMainContent };