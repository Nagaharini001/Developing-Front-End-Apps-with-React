let cartCountq = 0;
const cart = JSON.parse(localStorage.getItem('cart')) || []; // Ensure cart is initialized as an empty array on load


// Increase quantity
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', () => {
        let quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    });
});

// Decrease quantity
document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', () => {
        let quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let quantityElement = button.previousElementSibling.querySelector('.quantity');
        let productQuantity = parseInt(quantityElement.textContent);
        
        if (productQuantity > 0) {
            const productId = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price')); // Assume price is passed in data-price attribute

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += productQuantity; // Add the quantity to the existing product
            } else {
                cart.push({ id: productId, price: productPrice, quantity: productQuantity });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount(); // Update the cart count
        }
    });
});

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountq = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCountq;
}
// Clear the cart on page reload
localStorage.removeItem('cart');
