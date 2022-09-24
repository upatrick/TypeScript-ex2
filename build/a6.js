"use strict";
let lista6 = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
let adicionar = lista6.map((num) => (num += 1));
console.log(adicionar);
let listImpar = lista6.filter((impar) => impar % 2 !== 0);
console.log(listImpar);
let somaPar = lista6.map((numero) => (numero += 1));
console.log(somaPar);
let menores = lista6.filter((value) => value < 20);
console.log(menores);
let menores17 = lista6.filter((value) => value < 17);
let incremento = menores17.map((numero) => (numero += 1));
console.log(incremento);
let somaNum = menores.reduce((acumul, inicial) => (acumul += inicial));
console.log(somaNum);
// 6. Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32
// a) Adicione +1 em cada valor da lista;
// b) Crie um novo array contendo apenas os valores ímpares;
// c) Crie um novo array alterando todos os valores ímpares para o
// próximo valor par;
// d) Crie um novo array com os valores menores do que 20;
// e) Crie um novo array com os valores menores do que 17 e incremente
// cada um dos valores desse novo array;
// f) Retorne a soma de todos os valores menores do que 20;
