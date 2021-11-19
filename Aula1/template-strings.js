// Informações que serão utilizadas
const nome = "Pedro Henrique";
const idade = 2021 - 2004;
const cidadeDeNascimento = "Vitória";

// Método antigo
const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e nasci em " + cidadeDeNascimento + ".";

console.log(apresentacao);

// Método alternativo
const apresentacao2 = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeDeNascimento}.`;

console.log(apresentacao2);

// ==============================================================================================================

const nome2 = "Leo";
const age = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido1 = `${nome} diz: "Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}."`;
const pedido2 = `${nome2} diz: "Por favor, quero beber ${age >= 18 ? bebidaMaior : bebidaMenor}."`;

console.log(pedido1);
console.log(pedido2);