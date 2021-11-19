// let x = "";

// console.log(x);

// x = "oi";

// ************ EXPERIMENTANDO COM DIFERENTES TIPOS ************
// 1) UMA FUNÇÃO QUE IMPRIME UM TEXTO
// 1.1) COM DECLARAÇÃO DE FUNÇÃO

// function imprimeTexto(texto) {
//     console.log(texto);
// }

//  1.2) COM ARROW FUNCTION
imprimeTexto = (texto) => console.log(texto);

imprimeTexto("oi");
console.log("=================================")

// 2) UMA FUNÇÃO QUE SOMA DOIS valores
// 2.1) COM DECLARAÇÃO DE FUNÇÃO

// function soma(a, b) {
//     return a + b;
// }

// 2.2) COM ARROW FUNCTION
soma = (a, b) => {
    return a + b;
}

imprimeTexto(soma(1, 2));
console.log("=================================")

let lista = [1, 16, 150, -33];
console.table(lista);

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = '';
    for (let i = 0; i < lista.length; i++) {
        e += '\n' + descricao + lista[i];
    }
    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))