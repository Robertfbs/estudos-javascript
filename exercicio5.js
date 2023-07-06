

class Pessoas {
    nome;
    idade;
    altura;
    peso;

    constructor(nome, idade, altura, peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        
    }

    calcularImc(peso, altura) {
        return this.peso / (this.altura * this.altura);
        
    }

    classificarImc(){
        const imc = this.calcularImc();
        

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

}


const robert = new Pessoas('Robert Ferrari', 31, 1.75, 87);
const jose = new Pessoas('José Luiz', 43, 1.75, 70,);

console.log(robert.classificarImc());
console.log(jose.classificarImc());