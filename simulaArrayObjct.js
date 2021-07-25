const quaseArray = {0: 'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)


Object.defineProperty(quaseArray, 'toString', { //Con esto vamos a definir los atributos del objeto quaseArray. El toString esta como una función
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])