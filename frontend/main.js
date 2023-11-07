// Declarando las variables.

const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Declarando los eventos JS.
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleShoppingCartAside);


// Funciones.

// Mostrar/Ocultar Menu Desktop
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

// Mostrar/Ocultar Menu Mobile.
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

// Mostrar/Ocultar carrito de compras.
function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


// Creando una variable que contiene un array.
const productList = [];

// Declarando manualmente los objetos (Llave/Valor) y agregánolos al array.
productList.push({
    name: "Mountain Bike",
    price: "220",
    img: './imagenes/Logo Sin Texto.png',
});
productList.push({
    name: "OLED TV",
    price: "120",
    img: './imagenes/Logo Sin Texto.png',
});
productList.push({
    name: "Sport Bike",
    price: "520",
    img: './imagenes/Logo Sin Texto.png',
});
productList.push({
    name: "Coffee Pod",
    price: "20",
    img: './imagenes/Logo Sin Texto.png',
});
productList.push({
    name: "Camera",
    price: "240",
    img: './imagenes/Logo Sin Texto.png',
});
productList.push({
    name: "Vintage Camera",
    price: "70",
    img: './imagenes/Logo Sin Texto.png',
});

function renderProducts(arr) {
for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img); 

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './curso-frontend-developer-practico/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv,productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}
} 

renderProducts(productList);