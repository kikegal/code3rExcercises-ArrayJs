Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços

//creamos dos variables

const paraObjeto = json => JSON.parse(json) //este para convertir el json en objeto
const apenasPreco = item => item.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)