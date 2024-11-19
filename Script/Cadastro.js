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

function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const dataNascimento = document.getElementById('data-nascimento').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereço').value.trim();
    const email = document.getElementById('email').value.trim();
    const produto = document.getElementById('equipamento').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    let valido = true;

    // Limpa mensagens de erro
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validação de Nome
    if (nome === '') {
        document.getElementById('erro-nome').textContent = 'O campo Nome é obrigatório.';
        valido = false;
    }

    // Validação de Data de Nascimento
    if (dataNascimento === '') {
        document.getElementById('erro-data-nascimento').textContent = 'O campo Data de Nascimento é obrigatório.';
        valido = false;
    }

    // Validação de CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Exemplo: 123.456.789-00
    if (cpf === '') {
        document.getElementById('erro-cpf').textContent = 'O campo CPF é obrigatório.';
        valido = false;
    } else if (!cpfRegex.test(cpf)) {
        document.getElementById('erro-cpf').textContent = 'CPF inválido. Use o formato 123.456.789-00.';
        valido = false;
    }

    // Validação de Telefone
    const telefoneRegex = /^\(\d{2}\) \d{9}$/; // Exemplo: (11) 987654321
    if (telefone === '') {
        document.getElementById('erro-telefone').textContent = 'O campo Telefone é obrigatório.';
        valido = false;
    } else if (!telefoneRegex.test(telefone)) {
        document.getElementById('erro-telefone').textContent = 'Telefone inválido. Use o formato (11) 987654321.';
        valido = false;
    }

    // Validação de Endereço
    if (endereco === '') {
        document.getElementById('erro-endereco').textContent = 'O campo Endereço é obrigatório.';
        valido = false;
    }

    // Validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('erro-email').textContent = 'O campo E-mail é obrigatório.';
        valido = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('erro-email').textContent = 'E-mail inválido.';
        valido = false;
    }

    // Validação de Produto Desejado
    if (produto === '0') {
        document.getElementById('erro-produto').textContent = 'O campo Produto Desejado é obrigatório.';
        valido = false;
    }

    // Validação de Senha
    if (senha === '') {
        document.getElementById('erro-senha').textContent = 'O campo Senha é obrigatório.';
        valido = false;
    } else if (senha.length < 8) {
        document.getElementById('erro-senha').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        valido = false;
    }

    // Validação de Confirmação de Senha
    if (confirmarSenha === '') {
        document.getElementById('erro-confirmar-senha').textContent = 'O campo Confirmar Senha é obrigatório.';
        valido = false;
    } else if (senha !== confirmarSenha) {
        document.getElementById('erro-confirmar-senha').textContent = 'As senhas não coincidem.';
        valido = false;
    }

    return valido;
}



// Função para formatação do CPF
function formatarCPF(campo) {
    let valor = campo.value.replace(/\D/g, ''); // Remove tudo o que não for número
    if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    campo.value = valor;
}

// Função para permitir apenas números no campo de telefone
function apenasNumeros(campo) {
    campo.value = campo.value.replace(/\D/g, '');
}
