/*
Cóodigo de validação de formulário de cadastro
*/

function Validar() {
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let tel = document.getElementById("tel").value;
    let cpf = document.getElementById("cpf").value;
    let cep = document.getElementById("cep").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let numero = document.getElementById("numero").value;
    let rua = document.getElementById("rua").value;
    let complemento = document.getElementById("Complemento").value;
    let senha = document.getElementById("senha").value;
    let senha2 = document.getElementById("senha2").value;
    /*
    esse ! significa vazio= email vazio ou senha vazio fazer{ */

    if ((senha2 !== '' && senha !== '') && senha2 == senha) {
        if (!email || !nome || !tel || !cpf || !cep || !estado || !cidade || !numero || !rua || !complemento || !senha || !senha2) {
            alert("Campo de preenchimento obrigatório. Favor preencher");
        } else {
            alert("Campos preenchidos com sucesso!");
        }

    } else {
        alert("Sua senha esta incorreta");
    }
}