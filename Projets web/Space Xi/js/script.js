let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} Ariary`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}

function toggleCart() {
    const cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
        cart.style.zIndex = '999'
        cart.style.borderRadius ='10px'
    }
}
function redirectToCheckout() {
    window.location.href = "achat.html";
}