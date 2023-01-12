// -------------------- Carrito y contador en el nav bar --------------------

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(){

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers();








// -------------------- Captura de info del producto para la vista del carrito --------------------

const addToCart = document.getElementsByClassName('add-cart');
const productRow = document.getElementsByClassName('product-row');

for (let i = 0; i < addToCart.length; i++){
    button = addToCart[i]
    button.addEventListener('click', addToCartClicked);
}

function addToCartClicked (event){
    button = event.target;
    const cartItem = button.parentNode.parentNode;
    const name = cartItem.getElementsByClassName('product-name')[0].innerText;
    const price = cartItem.getElementsByClassName('product-price')[0].innerText;
    const discount = cartItem.getElementsByClassName('badge')[0].innerText;
    const imgSrc = cartItem.getElementsByClassName('img-fluid')[0].src;
    console.log('name')
    console.log('price')
    console.log('discount')
    console.log('imgSrc')
    addItemToCart(imgSrc, name, price, discount);
}

function addItemToCart(imgSrc, name, price, discount){
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    const productRows = document.getElementsByClassName('product-rows')[0];
    let cartName = document.getElementsByClassName('cart-name');
    let cartPrice = document.getElementsByClassName('cart-price');
    let cartDiscount = document.getElementsByClassName('cart-discount');
    let cartImage = document.getElementsByClassName('cart-image');

    const cartRowItems = `
    <div class="">
        <img class="cart-image" src="${imgSrc}">
        <p class="cart-name">${name}</p>
        <p class="cart-price">${price}</p>
        <p class="cart-discount">${discount}</p>
        <button class="remove-btn">Remove</button>
    </div>
    `


    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
}

    




// let addToCart = document.querySelector('#addToCart');

// addToCart.addEventListener('click', (event) => {

//     let product = event.target.parentNode.parentNode;
//     readProduct(product);
//     console.log(product);

//     let  precio= event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText.substring(1)
//     console.log(precio)
//     console.log(typeof(precio))
//     let descuento = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText
//     console.log(descuento)
//     let nombre = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling 
//     console.log(nombre)
// });

function readProduct(product){
    const infoProuct = {
        nombre: product.querySelector('.product-name p'),
        precio: product.querySelector('.product-price p'),
        descuento: product.querySelector('.discount span'),
        img: product.querySelector('img').src
    }
}