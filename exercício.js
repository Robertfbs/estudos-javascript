
// CÓDIGO BÁSICO, APRENDIDO NO INÍCIO DO CURSO DE JAVASCRIPT.

// const peso = 86;
// const altura = 1.75;
// const imc = peso / Math.pow(altura, 2);


// console.log(imc.toFixed(2));

// if(imc < 18.5){
//     console.log('Abaixo do peso!');
// }else if(imc >=18.5 && imc < 25){
//     console.log('Peso Normal!')
// }else if(imc >= 25 && imc < 30){
//     console.log('Acima do Peso!');
// }else if(imc >= 30 && imc <= 40){
//     console.log('Obeso!')
// }else {
//     console.log('Obesidade Grave!');
// }


// APRENDENDO A UTILIZAR FUNÇÕES PARA MELHORAR E DEIXAR NOSSO CÓDIGO MAIS FLUIDO.


// Função para calcular IMC e retornar valor.

function calcularImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

// Função para classificar, com base no resultado da função, "calcularIMC", se o usuário está, no peso normal, acima do peso, obeso ou obesidade grave.

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso!';
    }else if(imc >=18.5 && imc < 25){
        return 'Peso Normal!';
    }else if(imc >= 25 && imc < 30){
        return 'Acima do Peso!';
    }else if(imc >= 30 && imc <= 40){
        return 'Obeso!'
    }else {
        return 'Obesidade Grave!';
    }

}

// Função "main" não nomeada que é executada automaticamente sem necessidade de ser "invocada".

    (function main(){
    const peso = 86;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

})();

