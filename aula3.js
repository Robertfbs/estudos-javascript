

const numero = 918239081923801823810283123

const NumeroDivisivelPor5 = (numero % 5) ===0;

if (numero === 0) {
        console.log('O número é inválido!');
}   else if (NumeroDivisivelPor5) {
        console.log('Sim');
}   else {
        console.log('Não');
}
