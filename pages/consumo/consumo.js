function mostrarConsumo(distancia, combustivel) {
    let calcularConsumo = (km, litros) => (km / litros).toFixed(3)
    let consumo = calcularConsumo(distancia, combustivel)
    console.log(`${consumo} km/l`)
  }
  
  let distanciaPercorrida = 500
  let litrosGastos = 35.0
  
  mostrarConsumo(distanciaPercorrida, litrosGastos)