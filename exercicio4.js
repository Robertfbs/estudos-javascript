
class Carros {

    marca;
    cor;
    gastoPorKm;

    constructor(nome, marca, cor, gastoPorKm) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

   calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoPorKm * precoCombustivel;
   }
}

const uno = new Carros('Uno', 'Fiat', 'vinho', 1/12);
const cayman = new Carros('Cayman', 'Porshe', 'Preto', 1/8 );
const enzo = new Carros('Enzo', 'Ferrari', 'Vermelho', 1/5 );
const opala = new Carros('Opala', 'Chevrolet', 'Branco', 1/4.8 );


console.log(uno.calcularGastoDePercurso(70, 5));
console.log(enzo.calcularGastoDePercurso(70, 5))
console.log(opala.calcularGastoDePercurso(70,5));
