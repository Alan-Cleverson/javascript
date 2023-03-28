let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //coloca os numeros em ordem
/*
// console.log(valores)

// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])
// console.log(valores[6])

// Percurso para exibição do vetor

for(let pos = 0;pos < valores.length; pos++) {
    console.log('A posição '+ pos+' tem valor'+ valores[pos])
}
*/

for(let pos in valores) {
    console.log(valores[pos])
}