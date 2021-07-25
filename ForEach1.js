const aprovados = ['Agatha', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //como no puedo pasar por arrow nome e indice se puede almacenar en una const y pasar una funcion forEach a esa funcion


const mostrarAprovados = aprovados => console.log(aprovados)
aprovados.forEach(mostrarAprovados)