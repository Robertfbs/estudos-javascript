const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3

console.log(media)


if (media < 5){
    console.log('Infelizmente você foi reprovado!')
}else if(media >=5 && media <=7) {
    console.log('Você está de recuperação!')
}else{
    console.log('Parabéns!! Você foi aprovado!')
}