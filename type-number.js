// Tipo number

// Variáveis que armazenam valores simples.
const meuNumero = 4;
const primeiroNumero = 16;
const segundoNumero = 10;

// Variáveis que armazenam operações entre outras variáveis.
const somaNumeros = (primeiroNumero + segundoNumero);
const multiNumeros = (primeiroNumero * segundoNumero);

console.log(somaNumeros);
console.log("========================================");

// Variáveis que armazenam valores simples.
const numFloat = .9;
const numFloat2 = 0;
const valorDePi = Math.PI;

// Variáveis que armazenam operações entre outras variáveis.
const divideFloat = (numFloat / numFloat2);

console.log(divideFloat);
console.log("========================================");
console.log(`Valor de pi: ${valorDePi}`);
console.log("========================================");

// Função para testes.
function ganhoPorHora(salario, horasTrabalhadas) {
    const salarioPorHora = salario / horasTrabalhadas;
    //const salarioPorHoraString = salarioPorHora.toFixed(2);
    const salarioFormatado = salarioPorHora.toLocaleString('pt-BR', 
        {
        style: 'currency',
        currency: 'BRL'
        });
    return salarioFormatado;
}

console.log(`Salário total: ${ganhoPorHora(3000, 176)}`);
console.log("========================================");

function comparaNumeros(num1, num2) {
    if (num1 == num2) {
        return 0;
    } else if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    }
}

var lista = [10, 1, 5, 9, 8, 12, 15];

lista.sort((a, b) => a - b);
console.log(lista);