"use strict";
const lista2 = [
    "notebook",
    "celular",
    "radio",
    "tablet",
];
let compra2 = prompt("Qual eletrodoméstico você deseja comprar?");
const eletrodomesticos = lista2.find((eletro) => {
    if (eletro === compra2) {
        alert("parabens pela compra!");
        lista2.splice(lista2.indexOf(eletro), 1);
        console.log(lista2);
    }
});
// 5. Faça a mesma atividade anterior, mas troque o função findIndex pela
// função find. Dica: para localizar o indíce do elemento na lista é possível
// utilizar a função interna do array chamada indexOf (veja a documentação
// e aprenda a como utilizar).
