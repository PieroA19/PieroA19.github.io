let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - S/.${cartItem.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
    } else {
        alert(`Total a pagar: S/.${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
    }
}

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.menu .item');

    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

