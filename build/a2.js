"use strict";
let numeros = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
// // let numerosImp: Array<number> = []
//   var numerosImp: Array<number> = numeros.filter(%2)
//   console.log(numerosImp)
function transImp(value) {
    return value % 2 != 0;
}
let filtered = numeros.filter(transImp);
console.log(filtered);
// 2. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o filter.
