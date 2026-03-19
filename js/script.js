//user root para validação do login
var userRoot = {
    nome: "root",
    senha:1234
}

//Faz a validação do login
document.getElementById("submit-login").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    var inputNome = document.getElementById("txtNome").value;
    var inputSenha = document.getElementById("password").value;

console.log("TEste: ", inputNome, inputSenha);

    if (inputNome === userRoot.nome && inputSenha == userRoot.senha) {
        alert("Login bem-sucedido! Bem-vindo, " + inputNome + "!");
        window.location.href = "pages/fluxo-mesas.html"; // Redireciona para a página home.html
    } else {
        alert("Nome ou senha incorretos. Tente novamente.");
    }
});

//seta os Campos para nulos quando clicar no botão cancelar
document.getElementById("cancel-login").addEventListener("click", function(event) {
    document.getElementById("txtNome").value = "";
    document.getElementById("password").value = "";
});