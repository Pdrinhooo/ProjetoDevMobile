// Array
const listaCPFs = ["1631616145", "54654767642"];

// Objeto
const cliente = {
    nome: "Pedro Henrique",
    idade: 17,
    cpf: "123.456.789-10",
    email: "pedrofranca@protonmail.com"
}

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos.`);
console.log(`CPF: ${cliente.cpf.substring(0, 3)}.***.***-**`);