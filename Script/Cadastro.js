function formatarCPF(campo, input){
    let cpf = campo.value.replace(/\D/g, '');
    if(cpf.leght > 11) cpf = cpf.slice(0,11);

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
    const produto = document.getElementById('produto').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

  
    let mensagensErro = [];

 
    if (nome === '') mensagensErro.push('O campo Nome é obrigatório.');
    if (dataNascimento === '') mensagensErro.push('O campo Data de Nascimento é obrigatório.');
    if (cpf === '') mensagensErro.push('O campo CPF ou CNPJ é obrigatório.');
    if (telefone === '') mensagensErro.push('O campo Telefone é obrigatório.');
    if (endereco === '') mensagensErro.push('O campo Endereço é obrigatório.');
    if (email === '') mensagensErro.push('O campo E-mail é obrigatório.');
    if (produto === '') mensagensErro.push('O campo Produto Desejado é obrigatório.');
    
 
    if (senha === '') {
        mensagensErro.push('O campo Senha é obrigatório.');
    } else if (senha !== confirmarSenha) {
        mensagensErro.push('As senhas não coincidem.');
    }


    if (mensagensErro.length > 0) {
        alert(mensagensErro.join('\n'));
        return false; 
    }

    alert('Cadastro realizado com sucesso!');
    return true;
}