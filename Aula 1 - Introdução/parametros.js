soma = (a, b) => {
    return a + b;
}

// parametros x argumentos

nomeIdade = (nome, idade) => {
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

multiplica = (a = 1, b = 1) => {
    return a * b;
}

console.log(multiplica(soma(4, 5), soma(3, 3))); // 54
console.log(multiplica(soma(4, 5))); // 9