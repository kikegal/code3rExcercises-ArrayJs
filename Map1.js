//Metodo .map sirve para generar otro array pero con la misma cantidad de indices, solo que transformado a x

const nums = [1, 2, 3, 4, 5]

//for com propósito

let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

// map transforma e gera um outro array, o original se mantem
//Las siguientes funciones las aplicamos a um map multiple

const soma10 = e => e + 10
const triplo = e => e * 10
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
