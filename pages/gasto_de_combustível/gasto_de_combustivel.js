let kmPorLitro = 12

let tempo = 10
let velocidade = 85

let calcularLitros = (t, v) => ((t * v) /kmPorLitro).toFixed(3)

let litrosNecessarios = calcularLitros(tempo, velocidade)
console.log(litrosNecessarios)