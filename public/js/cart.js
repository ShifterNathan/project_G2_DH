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

let addToCart = document.querySelector('#addToCart');

addToCart.addEventListener('click', (event) => {

    let  precio= event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText.substring(1)
    console.log(precio)
    console.log(typeof(precio))
    let descuento = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText
    console.log(descuento)
    let nombre = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling 
    console.log(nombre)
});
