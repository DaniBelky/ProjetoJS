        // Recuperar os dados do carrinho
        const cartData = JSON.parse(localStorage.getItem('cartData'));
        const totalPrice = localStorage.getItem('totalPrice');

        const checkoutItems = document.getElementById('checkoutItems');
        const checkoutTotal = document.getElementById('checkoutTotal');

        // Exibir os itens do carrinho
        cartData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = 'Produto';
            img.classList.add('cart-item-image');

            const text = document.createElement('span');
            text.textContent = item.text;
            text.classList.add('cart-item-text');

            div.appendChild(img);
            div.appendChild(text);

            checkoutItems.appendChild(div);
        });

        // Exibir o total
        checkoutTotal.textContent = `Total: R$${totalPrice}`;

        // Submeter o formulário
        const paymentForm = document.getElementById('paymentForm');
        paymentForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita o envio padrão

            alert('Compra finalizada com sucesso!');
            localStorage.clear(); // Limpar o carrinho após a compra
            window.location.href = 'index.html'; // Redirecionar para a página inicial
        });