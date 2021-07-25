const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array

pilotos.push('Verstapen')
console.log(pilotos)

pilotos.shift() //remove da primeira posição
console.log(pilotos)

pilotos.unshift('Novo')
console.log(pilotos)

pilotos.splice(3, 3, 'maisum')
console.log(pilotos)

const novosPilotos = pilotos.slice(2) //Con este metodo se genera otro Array a partir del indice pasado
console.log(novosPilotos)

const novosPilotos2 = pilotos.slice(2, 4) //desde, hasta
console.log(novosPilotos2)