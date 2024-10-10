const cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartContainer = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    console.log('Cart items:', cart);

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.innerHTML = '<h3>Total Price: $0</h3>';
        return;
    }

    cart.forEach(item => {
        
        console.log('Item:', item);
        
       
        const itemPrice = 1;
        const itemQuantity = parseInt(item.quantity, 10);
        
        const itemTotalPrice = itemPrice * itemQuantity;
        totalPrice += itemTotalPrice;

        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<h3>Product ID: ${item.id} - Quantity: ${itemQuantity} - Price: $${itemTotalPrice.toFixed(2)}</h3>`;
        cartContainer.appendChild(cartItem);
    });

    totalPriceElement.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
}


function checkout() {
    const checkoutMessage = document.getElementById('checkout-message');
    checkoutMessage.textContent = 'Your order is successfully placed!';
}

document.getElementById('checkout-button').addEventListener('click', checkout);


displayCart();