//user root para validação do login
var userRoot = {
    nome: "root",
    senha:1234
}

//Faz a validação do login
document.getElementById("submit-login").addEventListener("click", function(event) {
    var inputNome = document.getElementById("txtNome").value;
    var inputSenha = document.getElementById("password").value;

    if (inputNome === userRoot.nome && inputSenha == userRoot.senha) {
        alert("Login bem-sucedido!");
    } else {
        alert("Nome ou senha incorretos. Tente novamente.");
    }
});

//seta os Campos para nulos quando clicar no botão cancelar
document.getElementById("cancel-login").addEventListener("click", function(event) {
    document.getElementById("txtNome").value = "";
    document.getElementById("password").value = "";
});