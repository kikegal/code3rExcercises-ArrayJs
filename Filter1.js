const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidrio', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){ //con esto creamos la funcion que va a filtrar
    return p.preco > 2500 //aqui condicionamos el filtro

}))
//creando funciones para filtrar multiples opciones

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))