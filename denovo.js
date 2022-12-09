// Exercício 1

const { pid } = require('process')

const prompt = require('prompt-sync')()

const raio = prompt("Raio " )
const altura = prompt("Altura " )


const volume = (3,14) * Math.pow(raio,2) * altura

console.log(volume)
