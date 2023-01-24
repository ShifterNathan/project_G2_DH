// -------------------- Carrito y contador en el nav bar --------------------

// Trigger the cart data
let carts = document.querySelectorAll('.add-cart');
let products = [];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        addToCartClicked(event)
        cartNumbers(i);
    })
}

// Save the cart numbers for all the views
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// Increse the cart number on each click
function cartNumbers(i){
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

// Get the cart data from the html
function addToCartClicked(event){
    button = event.target;
    const cartItem = button.parentNode.parentNode;
    const name = cartItem.getElementsByClassName('product-name')[0].innerText;
    const price = cartItem.getElementsByClassName('product-price')[0].innerText.substring(2);
    const preDiscount = cartItem.getElementsByClassName('badge')[0].innerText.substring(1);
    const discount = preDiscount.substring(0, preDiscount.length-1);
    const imgSrc = cartItem.getElementsByClassName('img-fluid')[0].src;
    
    data = {
        name: name,
        price: price,
        discount: discount,
        imgSrc: imgSrc,
        inCart: 0
    } 

    products.push(data);
    setItems(products.length-1); 
    totalCost(data)
    displayCart(data);
}

// Save the cart data into localStorage
function setItems(i) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    // if items in cart are equals to null, we are going to define the first one
    if(cartItems !== null){
        // if we already added an item, a different one will throw undefined because the cartItems is filled
        if(cartItems[products[i].name] == undefined){
            // If that happens, we will bring whichever is in cartItems and set a new item inside the object labeled with the product name
            cartItems = {
                ...cartItems,
                [products[i].name]: products[i]
            }
        }
        cartItems[products[i].name].inCart++;
    } else {
        products[i].inCart = 1
        cartItems = {
            [products[i].name]: products[i]
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//To get the cost of each product and accumulate it as new products are clicked
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost')
    cartCost = parseInt(cartCost) || 0;
    
    cartCost += parseInt(product.price)
    localStorage.setItem("totalCost", cartCost)

}


// To show the product in the cart just IF the cartItems and productContainer exist
function displayCart(data){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productContainer = document.querySelector('.products-container');
    if(cartItems && productContainer){
        
        data.inCart = cartItems[data.name].inCart;
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');
        const productRows = document.getElementsByClassName('product-rows')[0];
        let cartImage = document.getElementsByClassName('cart-image');
        let cartName = document.getElementsByClassName('cart-name');
        let cartPrice = document.getElementsByClassName('cart-price');
        let cartDiscount = document.getElementsByClassName('cart-discount');
            

            const cartRowItems = `
            <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                    <div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <img src="${data.imgSrc}" class="cart-image img-fluid rounded-3 w-100">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <p class="cart-name text-black">${data.name}</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 d-flex">
                        <span>${data.discount}%</span>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2">
                            <p class="cart-price h6 mb-0">${data.price}</p>
                            
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted"><i class="fa-regular fa-circle-xmark text-danger"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `
        console.log(data.inCart)
        productRow.innerHTML = cartRowItems;
        productRows.append(productRow);

        // const total = document.createElement('div');
        // total.classList.add('total');
        // const totalPurchase = document.getElementsByClassName('totalPurchase')[0];

        // const totalPayment = `
        // <div class="row mb-4 d-flex justify-content-center align-items-center">
        //     <p class="h3">Pago total: $${data.cartCost}</p>
        // </div>
        // `
        // total.innerHTML = totalPayment;
        // totalPurchase.append(total);
        // console.log(data.cartCost)


    }

    function clearCart(){
        localStorage.clear()
        location.reload()
    }

    let clearButton = document.querySelector('.btn-danger');
    clearButton.addEventListener('click', clearCart);
 
}

onLoadCartNumbers();
