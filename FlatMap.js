const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

//FlatMap cpncatena todos los elemnetos mismo que esten en varios arrays separados en un mismo objeto.
const getNotadoAluno = aluno => aluno.nota
const getTurmaAluno = turma => turma.alunos.map(getNotadoAluno)

const notas1 = escola.map(getTurmaAluno)
console.log(notas1)