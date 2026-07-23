const URL_SCRIPT = "https://github.com/trabalheconosco-dotcom/cadastros.git";


function gerarNumero(){

    return Math.floor(Math.random() * 900000) + 100000;

}


function cadastrar(){

    let nome = document.getElementById("nome").value.trim();


    if(nome === ""){

        alert("Digite seu nome");

        return;

    }


    let numero = gerarNumero();



    fetch(URL_SCRIPT, {

        method: "POST",

        mode: "no-cors",

        body: JSON.stringify({

            nome: nome,

            numero: numero

        })

    })

    .then(()=>{


        document.getElementById("resultado").innerHTML = `

            <h3>Cadastro realizado!</h3>

            <p>Seu número é:</p>

            <h1>${numero}</h1>

        `;


        document.getElementById("nome").value = "";


    })

    .catch(()=>{

        alert("Erro ao enviar cadastro");

    });


}