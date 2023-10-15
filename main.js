const form = document.getElementById('form-cadastro');
const imgAdicionado = '<img src="./imagens/OK.png" alt="emoji OK"/> ';
const nome =[];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (nome.includes(inputNomeUsuario.value)) {
        alert(`O nome: ${inputNomeUsuario.value} já existe. Favor adicionar o nome completo`);
    } else {
        nome.push(inputNomeUsuario.value);
    numero.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeUsuario.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${imgAdicionado} </td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeUsuario.value = '';
    inputNumeroTelefone.value = '';
    }
    
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}