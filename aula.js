/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:

1- Preço do combustível;
2- Gasto médio de combustível por KM;
3- Distância em KM que será percorrida na viagem;

*/
const precoCombustivel = 4.79;
const kmPorLitro = 10;
const trajetoEmkm = 100;

const litrosConsumidos = trajetoEmkm / kmPorLitro;
const gastoViagemIda = precoCombustivel * litrosConsumidos;
const idaVoltaViagem = gastoViagemIda * 2;

console.log(gastoViagemIda);

console.log(idaVoltaViagem.toFixed(2));





