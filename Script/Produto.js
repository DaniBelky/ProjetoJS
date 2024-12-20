//nav bar
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("ativo");
}


function showTab(tabName) {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));


    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));


    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');

    window.history.replaceState(null, null, `?tab=${tabName}`);
}

let total = 0;
let itemCount = 0; // Corrigido aqui

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cartItems');
    const item = document.createElement('li');
    item.textContent = `${productName} - R$${productPrice}`;
    cartItems.appendChild(item);

    const productPriceNumber = parseFloat(productPrice.replace(/[^\d,]/g, '').replace(',', '.'));

    total += productPriceNumber;

    const formattedTotal = total.toFixed(2)
        .replace('.', ',')               
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 

    document.getElementById('totalPrice').textContent = `Total: R$${formattedTotal}`;

    itemCount++; // Corrigido aqui
    document.getElementById('cartCount').textContent = itemCount; // Corrigido aqui
}


function openCart() {
    document.getElementById('cart').style.display = 'block';
}

function closeCart() {
        document.getElementById('cart').style.display = 'none';
    }

    // botão de compra do carrinho
    function proceedToCheckout() {
        // Obter os itens do carrinho
        const cartItems = document.querySelectorAll('#cartItems .cart-item');
        const cartData = [];
    
        cartItems.forEach(item => {
            const productText = item.querySelector('.cart-item-text').textContent;
            const productImage = item.querySelector('.cart-item-image').src;
    
            cartData.push({
                text: productText,
                image: productImage
            });
        });
    
        // Salvar os dados do carrinho no localStorage
        localStorage.setItem('cartData', JSON.stringify(cartData));
        localStorage.setItem('totalPrice', total.toFixed(2));
    
        // Redirecionar para a página de checkout
        window.location.href = 'checkout.html';
    }
    