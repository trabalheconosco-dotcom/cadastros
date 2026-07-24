const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbw1M8KpO7H0bKnNO7Lb68l5QpmzKZMyhPWGle0ww0wyb9BBss-CMZz5lkOMtT309bSp/exec";

function gerarNumero() {
    return Math.floor(Math.random() * 900000) + 100000;
}

function cadastrar() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite seu nome");
        return;
    }

    let numero = gerarNumero();

    fetch(URL_SCRIPT, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
            nome: nome,
            numero: numero
        })
    })
    .then(() => {
        document.getElementById("resultado").innerHTML = `
            <h3>Cadastro realizado!</h3>
            <p>Seu número é:</p>
            <h1>${numero}</h1>
        `;

        nomeInput.value = "";
    })
    .catch((error) => {
        console.error("Erro no envio:", error);
        alert("Erro ao enviar cadastro");
    });
}
