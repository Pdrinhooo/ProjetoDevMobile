const cliente = {
    nome: "Pedro Henrique",
    idade: 17,
    cpf: "123.456.789-10",
    email: "pedrofranca@protonmail.com"
};

console.log(cliente);

cliente.telefone = "964564654";
console.log(cliente);

cliente.telefone = "864416414";
console.log(cliente);

console.log(`Seu número de telefone é: +55 27 ${cliente.telefone.substring(0, 1)} ${cliente.telefone.substring(1, 5)}-${cliente.telefone.substring(5, 9)}`)