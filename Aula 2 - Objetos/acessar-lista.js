const cliente = {
    nome: "Pedro Henrique",
    idade: 17,
    cpf: "123.456.789-10",
    email: "pedrofranca@protonmail.com"
};

const chaves = [
    "nome", 
    "idade", 
    "cpf", 
    "email"
];

console.log(cliente[chaves[0]]);
console.log("========================================")

const chave = "nome";
console.log(cliente[chave]);
console.log("========================================")

chaves.forEach(info => console.log(cliente[info]))
console.log("========================================")

console.table(cliente)