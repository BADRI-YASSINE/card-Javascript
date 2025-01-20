let brands = ['asus','dell','msi','hp','lenovo','accer','touchiba','samsung'];
let prices = ['200$','500$','300$','200$','100$','400$','800$','300$'];
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(brand,prix) {
    // elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let price = document.createElement('p');
    let img = document.createElement('img');
    // create-content
    let head = document.createTextNode(brand);
    let pricecontent = document.createTextNode(prix);
    img.src = '/images/61-Gb7HwMBL._AC_UF894,1000_QL80_.jpg';
    title.appendChild(head);
    price.appendChild(pricecontent);
    // styling
    card.style.width = '200px';
    card.style.border = '1px solid';
    card.style.padding = '5px';
    card.style.borderRadius = '3px';
    card.style.backgroundColor = '#ebebeb';
    card.style.display = 'inline-block';
    card.style.margin = '5px';
    img.style.width = '100%';
    img.style.borderRadius = '3px';
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);

};
for (let i = 0; i < 8; i++) {
    element(brands[i],prices[i]);
};

