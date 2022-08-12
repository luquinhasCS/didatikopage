const btn = document.querySelector('button')

btn.addEventListener("click", function () {
    ;
    var escolha = (prompt("Nova Senha: ").trim());
    if (escolha == null || escolha == "") {
        alert("Você não alterou a sua senha!")
    }
    else {
        alert("Você alterou a sua senha!")
        }
});
