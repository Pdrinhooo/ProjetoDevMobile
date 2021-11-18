// tipo String.

const string1 = "Olá, mundo! ";
const string2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const citacao = 'Como dito por Vlad Tepes III, o Lorde Empalador e Conde Drácula: \n"O que é um homem? Uma pilha miserável de segredos!"';

const concatenado = (string1 + citacao);
console.log(concatenado);
console.log("========================================");

// Testes com os códigos unicode.
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const checkMark = '\u2705';
const aHiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(checkMark);
console.log(aHiragana);
console.log("========================================");

// Utilizando boolean em conjunto com String.
console.log(cifrao === aMaiusculo);
console.log("========================================");

// JavaScript diferencia maiúsculas e minúsculas.
const cidade = "Vila-Velha";
const cidade2 = "Vila-velha";
console.log(cidade === cidade2);
console.log("========================================");

// Para burlar isto, pode-se padronizar todos os inputs para um
// único formato de texto.

const cidadeMinusculo = cidade.toLowerCase();
const cidade2Minusculo = cidade2.toLowerCase();

console.log(cidadeMinusculo === cidade2Minusculo);
console.log("========================================");

console.log(cidade.length);