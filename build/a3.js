"use strict";
const aaray = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
let soma = aaray.reduce((acumulador, inicial) => (acumulador += inicial), 0);
console.log(soma);
// 3. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce.
