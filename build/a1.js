"use strict";
let a1 = Number(prompt("Digite o valor 1: "));
let a2 = Number(prompt("Digite o valor 1: "));
let a3 = Number(prompt("Digite o valor 1: "));
let a4 = Number(prompt("Digite o valor 1: "));
let a5 = Number(prompt("Digite o valor 1: "));
let a6 = Number(prompt("Digite o valor 1: "));
let a7 = Number(prompt("Digite o valor 1: "));
let array = [a1, a2, a3, a4, a5, a6, a7];
array.forEach(function (array) {
    console.log('[forEach]', array);
});
// 1. Crie um algoritmo que solicite para o usuário informar um número
// qualquer 7x. Adicione cada número informado pelo usuário em uma lista.
// No final utilize o forEach para mostrar cada elemento da lista.
