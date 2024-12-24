// Global variables
let cart = [];
let totalPrice = 0;

// Event listeners for menu items
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add item to the cart
function addToCart(event) {
    const menuItem = event.target.closest('.menu-item');
    const itemId = menuItem.dataset.id;
    const itemName = menuItem.querySelector('h3').textContent;
    const itemPrice = parseFloat(menuItem.querySelector('p').textContent.replace('$', ''));

    // Add item to the cart array
    cart.push({ id: itemId, name: itemName, price: itemPrice });

    // Update the cart display
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // Clear the cart display
    cartItemsList.innerHTML = '';

    // Add items to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Update the total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

// Proceed to checkout
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length > 0) {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('cart').style.display = 'none';
        document.getElementById('order').style.display = 'block';
    } else {
        alert('Your cart is empty!');
    }
});

// Go back to the menu
document.getElementById('back-to-menu').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cart').style.display = 'block';
    document.getElementById('order').style.display = 'none';
});
