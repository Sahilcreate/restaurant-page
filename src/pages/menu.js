import { clearMainContent } from "../clearContent";

function loadMenuPage() {
    clearMainContent();

    const content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.classList.add('menu-page');

    const mainContent = document.getElementById('main-content');

    const menuTextContainer = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const menuGridContainer = document.createElement('div');

    menuTextContainer.classList.add('menu-text-container');
    menuHeading.classList.add('menu-heading');
    menuGridContainer.classList.add('menu-grid-container');

    menuHeading.textContent = "· MENU ·"


    function createDishdiv() {
        const dishDiv = document.createElement('div');
        const dishHeading = document.createElement('h2');
        const dishDescription = document.createElement('p');

        dishDiv.classList.add('menu-grid-div', 'grid-div');
        dishHeading.classList.add('dish-heading','h2-headings');
        dishDescription.classList.add('dish-description', 'descriptions');

        dishDiv.appendChild(dishHeading);
        dishDiv.appendChild(dishDescription);

        return dishDiv;
    }

    function appendDishDiv() {
        const dishDivArray = [];
        const numOfDish = 8;

        for (let i = 0; i < numOfDish; i += 1) {
            dishDivArray.push(createDishdiv());
            menuGridContainer.appendChild(dishDivArray[i]);
        }

        dishDivArray[0].children[0].textContent = "Fusion Miso-Glazed Salmon";
        dishDivArray[0].children[1].textContent = "Immerse yourself in the umami-rich experience of our miso-glazed salmon, perfectly seared to achieve a succulent texture. Accompanied by a medley of seasonal vegetables and a drizzle of yuzu-infused vinaigrette, this dish bridges the gap between East and West with elegance."

        dishDivArray[1].children[0].textContent = "Truffle Infused Wild Mushroom Risotto";
        dishDivArray[1].children[1].textContent = "Indulge in the creamy decadence of our wild mushroom risotto, infused with the rich aroma of truffle oil. Each bite reveals a symphony of forest flavors, complemented by a sprinkle of aged Parmesan and a dash of fresh microgreens, promising a luxurious culinary journey."

        dishDivArray[2].children[0].textContent = "Rustic Lamb Tagine";
        dishDivArray[2].children[1].textContent = "Transport yourself to the heart of the Mediterranean with our rustic lamb tagine. Slow-cooked to perfection, the tender lamb melds seamlessly with aromatic spices, sweet apricots, and savory olives. Served over a bed of fluffy couscous, this dish is a testament to timeless tradition and innovation."

        dishDivArray[3].children[0].textContent = "Avocado and Mango Quinoa Salad";
        dishDivArray[3].children[1].textContent = "Refresh your palate with our vibrant avocado and mango quinoa salad. Bursting with color and flavor, this dish combines creamy avocado, juicy mango, and nutty quinoa, all tossed in a zesty lime and cilantro dressing. A true celebration of fresh, wholesome ingredients."

        dishDivArray[4].children[0].textContent = "Deconstructed Tiramisu Parfait";
        dishDivArray[4].children[1].textContent = "End your meal on a sweet note with our deconstructed tiramisu parfait. Layers of espresso-soaked ladyfingers, velvety mascarpone cream, and a dusting of cocoa come together in this innovative take on a classic dessert. Each spoonful offers a delightful balance of rich and light textures, leaving you craving for more."

        dishDivArray[5].children[0].textContent = "Charred Cauliflower Steak with Tahini Dressing";
        dishDivArray[5].children[1].textContent = "Experience the bold flavors of our charred cauliflower steak, seasoned with a blend of spices and grilled to perfection. Topped with a rich and nutty tahini dressing, toasted pine nuts, and a sprinkle of pomegranate seeds, this vegan delight is a testament to the beauty of simplicity and elegance."

        dishDivArray[6].children[0].textContent = "Pan-Seared Scallops with Citrus Beurre Blanc";
        dishDivArray[6].children[1].textContent = "Succulent and perfectly pan-seared, our scallops are served atop a bed of creamy saffron risotto. Accompanied by a velvety citrus beurre blanc and garnished with fresh chives, this dish is a symphony of flavors that celebrates the bounty of the sea."

        dishDivArray[7].children[0].textContent = "Saffron-Infused Paella with Seafood Medley";
        dishDivArray[7].children[1].textContent = "Dive into the rich, aromatic world of our saffron-infused paella, brimming with a medley of fresh seafood including shrimp, mussels, and calamari. Cooked to perfection with fragrant rice, bell peppers, and peas, this dish is a vibrant homage to Spanish culinary traditions, brought to life with a contemporary twist."
    }

    appendDishDiv();

    menuTextContainer.appendChild(menuHeading);
    menuTextContainer.appendChild(menuGridContainer);

    mainContent.appendChild(menuTextContainer);

}

export { loadMenuPage };