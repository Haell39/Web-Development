// Este é um comentário de linha única

/*
Este é um comentário de múltiplas linhas
*/

// Variáveis e tipos de dados
let nome = "João"; // String
const idade = 30; // Número
let casado = false; // Booleano

// Função básica
function saudar(pessoa) {
    return "Olá, " + pessoa + "!";
}

// Chamando a função e armazenando o resultado
let saudacao = saudar(nome);
console.log(saudacao); // Saída: Olá, João!

// Estruturas de controle - Condicional
if (idade >= 18) {
    console.log(nome + " é maior de idade.");
} else {
    console.log(nome + " é menor de idade.");
}

// Estruturas de controle - Loop
for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

// Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[1]); // Saída: Banana

// Objetos
let pessoa = {
    nome: "Maria",
    idade: 25,
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;
    }
};

console.log(pessoa.saudacao()); // Saída: Olá, meu nome é Maria

// Manipulação de DOM (somente funciona em navegador, não no Node.js)
// Suponha que você tenha um arquivo HTML com um elemento <div id="mensagem"></div>
/*
document.getElementById('mensagem').innerText = "Texto inserido via JavaScript!";
*/

// Funções de Callback e Manipulação de Arrays
frutas.forEach(function(fruta, indice) {
    console.log(indice + ": " + fruta);
});

// Funções Assíncronas com Promises
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

esperar(2000).then(() => console.log("2 segundos se passaram!"));

// Funções Assíncronas com Async/Await
async function executar() {
    console.log("Esperando 3 segundos...");
    await esperar(3000);
    console.log("3 segundos se passaram!");
}

executar();
