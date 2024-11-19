function formatarCPF(campo, input) {
    let cpf = campo.value.replace(/\D/g, '');
    if (cpf.leght > 11) cpf = cpf.slice(0, 11);

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    campo.value = cpf;
}

function apenasNumeros(input) {
    input.value = input.value.replace(/\D/g, '');
}


// Recuperar os dados do carrinho
const cartData = JSON.parse(localStorage.getItem('cartData'));
const totalPrice = localStorage.getItem('totalPrice');

// Exibir o total
checkoutTotal.textContent = `Total: R$${totalPrice}`;


const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    alert('Compra finalizada com sucesso!');
    localStorage.clear(); 
    window.location.href = 'Produtos.html'; 
});