// JavaScript for Cart functionality

const cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Update Cart Count
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    cartTotalElement.textContent = total;
}

// Render Cart Items
function renderCartItems() {
    cartItemsElement.innerHTML = '';

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<li>Your cart is empty.</li>';
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(li);
    });
}

// Add Item to Cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    updateCartTotal();
    renderCartItems();
}

// Handle Add to Cart Button Click
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const name = productElement.getAttribute('data-name');
        const price = parseFloat(productElement.getAttribute('data-price'));

        addToCart(name, price);
    });
});
