let num = [5,8,4]
num [3] = 6
num.push(7) // acescenta o numero escolhido no final
num.length // conta quantas posicoes (numeros)
num.sort() // ordena os numeros

console.log(num)
console.log('O vetor tem '+ num.length +' posições')
console.log('O primeiro valor de vetor é '+ num[1])
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log('O valor 8 esta na posição '+ pos)
}   