const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Para hacer un resultado de la media de las notas
// Metodo Imperativo (Cómo deben hacerse los procesos)

let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Metodo declarativo (Qué se hace para obtener el resultado de un proceso)

const getNota = alunos => alunos.nota //aqui obtenemos los valores
const soma = (total, actual) => total + actual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)