// APRENDENDO A CALCULAR GASTO DE LT POR KM NUMMA VIAGEM.

// const precoGasolina = 5.30;
// const precoEtanol = 4.10;
// const kmPorLitro = 10;
// const trajetoEmkm = 100;
// const tipoCombustivel = 'Etanol';



// const litrosConsumidos = trajetoEmkm / kmPorLitro;



// if (tipoCombustivel === 'Etanol') {
//     const gastoViagemIda = precoEtanol * litrosConsumidos;
//     const idaVoltaViagem = gastoViagemIda * 2;
//     console.log(gastoViagemIda.toFixed(2));
//     console.log(idaVoltaViagem.toFixed(2))
// } else{
//     const gastoViagemIda = precoGasolina * litrosConsumidos;
//     const idaVoltaViagem = gastoViagemIda * 2;
//     console.log(gastoViagemIda.toFixed(2));
//     console.log(idaVoltaViagem.toFixed(2));
// }


// INTRODUÇÃO A OBJETOS E CLASSES, ATRIBUINDO VALORES DE "OBJETOS" À VARIÁVEIS, CONFORME EXEMPLO NO CÓDIGO ABAIXO.


// class Pessoa {
//     nome;
//     idade;

//     descrever(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }


// const robert = {
//     nome: 'Robert Ferrari',
//     idade: 25,

//     descrever: function (){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }

// };

// robert.descrever();



// CLASSE = DEFINIÇÃO DO QUE DEVE SER O OBJETO;
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e eu nasci em ${this.anoDeNascimento}`);
    }
}

// INSTÂNCIA = OCORRÊNCIAS DO OBJETO ACIMA, CADA CONST ABAIXO, SIGNIFICA 1 INSTÂNCIA NOVA DO OBJETO ACIMA;

const robert = new Pessoa('Robert Ferrari', 31);
// robert.nome = 'Roert Ferrari';
// robert.idade = 31;

const renato = new Pessoa('Renato Francisco', 60);
// renato.nome = 'Renato Francisco';
// renato.idade = 60;

const gleici = new Pessoa('Gleiciane Ferrari', 51);
// gleici.nome = 'Gleiciane Ferrari';
// gleici.idade = 51;

const luiane = new Pessoa('Luiane Ferrari', 29);
// luiane.nome = 'Luiane Ferrari';
// luiane.idade = 29;

const kariny = new Pessoa('Kariny Ferrari', 31);
// kariny.nome = 'Kariny Ferrari';
// kariny.idade = 31;

const luigi = new Pessoa('Luigi Ferrari', 1);
// luigi.nome = 'Luigi Ferrari';
// luigi.idade = 1;


// INVOCANDO A FUNÇÃO "DESCREVER" EXISTENTE DENTRO DO OBJETO, "PESSOA" PARA CADA INSTÂNCIA;
// robert.descrever();
// renato.descrever();
// gleici.descrever();
// luiane.descrever();
// kariny.descrever();
// luigi.descrever();


// FUNÇÃO PARA COMPARAR IDADE DE PESSOAS E INFORMAR QUAL É A MAIS VELHA;

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!!`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!!`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!!`);
    }
}

compararPessoas(luigi, robert);