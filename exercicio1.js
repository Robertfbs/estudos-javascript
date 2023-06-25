const nota1 = 10;
const nota2 = 9;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3


console.log(media.toFixed(1))


if (media < 5){
    console.log('Infelizmente você foi reprovado!')
}else if(media >=5 && media <=7) {
    console.log('Você está de recuperação!')
}else{
    console.log('Parabéns!! Você foi aprovado!')
}