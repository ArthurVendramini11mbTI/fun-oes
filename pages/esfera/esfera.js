let PI = 3.14159;

function calcularVolumeEsfera(raio) {
  return (4.0 / 3) * PI * Math.pow(raio, 3);
}

let raio = 10

let volume = calcularVolumeEsfera(raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);