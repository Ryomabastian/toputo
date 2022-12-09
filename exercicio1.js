// Exercício 1

const { pid } = require('process')

const prompt = require('prompt-sync')()

const raio = prompt("Raio " )
const altura = prompt("Altura " )

const raioaoQadrado = Math.pow(raio,2)

const volume = (pi) * raioaoQadrado * altura

console.log(volume)


