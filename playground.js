const precoGasolina = 5.30;
const precoEtanol = 4.10;
const kmPorLitro = 10;
const trajetoEmkm = 100;
const tipoCombustivel = 'Etanol';
let gastoViagemResultado;
let idaVoltaViagemResultado;

const litrosConsumidos = trajetoEmkm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const gastoViagemIda = precoEtanol * litrosConsumidos;
    const idaVoltaViagem = gastoViagemIda * 2;
    gastoViagemResultado = gastoViagemIda.toFixed(2);
    idaVoltaViagemResultado = idaVoltaViagem.toFixed(2);    
} if(tipoCombustivel === 'Gasolina'){
    const gastoViagemIda = precoGasolina * litrosConsumidos;
    const idaVoltaViagem = gastoViagemIda * 2;
    gastoViagemResultado = gastoViagemIda.toFixed(2);
    idaVoltaViagemResultado = idaVoltaViagem.toFixed(2);
}else{
    console.log('Tipo de Combustível inválido!')
}

if(!gastoViagemResultado)
    {console.log('Valor não identificado!')}
else console.log(gastoViagemResultado)

if(!idaVoltaViagemResultado)
    {console.log('Valor não identificado!')}
else console.log(idaVoltaViagemResultado)
