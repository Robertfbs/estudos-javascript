// CÓDIGO BASE PARA CALCULAR PREÇO DO PRODUTO CONFORME ESCOLHA DO PAGAMENTO PELO USUÁRIO, ADICIONANDO JUROS OU DANDO DESCONTOS.


// const precoEtiqueta = 100;
// const formaDePagamento = 1;

// if(formaDePagamento === 1){
//     console.log(precoEtiqueta - (precoEtiqueta * 0.1));
// }else if(formaDePagamento === 2){
//     console.log(precoEtiqueta - (precoEtiqueta * 0.15))
// }else if(formaDePagamento === 3){
//     console.log(precoEtiqueta)
// }else{
//     console.log(precoEtiqueta + (precoEtiqueta * 0.1))
// }


// MESMO EXERCÍCIO, AGORA UTILIZANDO "FUNCTION".

function aplicarDesconto(valor, desconto){
    return (valor - (valor * desconto)); 
}

function aplicarJuros(valor, juros){
    return (valor + (valor * juros))
}
const precoEtiqueta = 100;
const formaDePagamento = 1;



    if(formaDePagamento === 1){
        console.log(aplicarDesconto(precoEtiqueta, 0.1));
    }else if(formaDePagamento === 2){
        console.log(aplicarDesconto(precoEtiqueta,0.15))
    }else if(formaDePagamento === 3){
        console.log(precoEtiqueta)
    }else{
        console.log(aplicarJuros(precoEtiqueta, 0.1))
    }

   