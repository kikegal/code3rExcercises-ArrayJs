console.log(typeof Array, typeof new Array, typeof[])

let aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0], aprovados[1], aprovados[2])

aprovados [3] = 'Eduardo'

console.log(aprovados[3])

aprovados.push('Abia')

console.log(aprovados[4])

console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()   //este metodo, que es un tipo de algoritmo, ordena el array, pero retorna un nuevo array
console.log(aprovados)

delete aprovados[1]

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

//aprovados.splice(1,1)  //Con esto aqui estamos eliminando del indice 1 el primer elemento
aprovados.splice(1, 1, 'Elemento3', 'Elemento4') //Quiere decir que en el elemento 1 eleminamos el 1er elemento, entre aspa adiciono
console.log(aprovados)