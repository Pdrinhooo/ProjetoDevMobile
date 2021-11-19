// var -> pode ser utilizada até mesmo antes de ser declarada (NÃO RECOMENDADA)
// let -> ainda permite alteração, porém necessita declaração prévia
// const -> não permite alteração posterior.

let altura = 5;
let comprimento = 7;

let area = altura * comprimento;

console.log(area);


// ===============================================================================

// Tipagem dinâmica -> Variáveis podem ter seus tipos alterados.
// Apesar de possível, não é recomendado.

let minhaVar = 567;
console.log(typeof minhaVar);

minhaVar = "YOOOO";
console.log(typeof minhaVar);