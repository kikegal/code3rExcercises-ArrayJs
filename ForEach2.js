Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){ //este for va a recorrer todo el array
        callback(this[i], i, this)//estos son los paramentros que pasamos para la funcion callback
    }
}

const aprovados = ['Agatha', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})
