const aaray: Array<number> = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]

let soma: number = aaray.reduce((acumulador: number, inicial: number) => (acumulador += inicial), 0)

console.log(soma)
    
// 3. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce.