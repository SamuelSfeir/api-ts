class Animal {
    raça : any;
    nome : any;
    idade : any;

    //Parametros do constructor
    constructor (raça:any, nome:any, idade:any) {
        //Propriedades
        this.raça = raça,
        this.nome = nome,
        this.idade = idade
    }

    //Métodos
    Latir(){
        console.log('latir');  
    }

}

class Animal2 {
    //Parametros do constructor
    constructor (readonly raça:any, readonly nome:any, readonly idade:any) {
        // readonly = unifica os parametros do construtor e as propriedades
    }

    //Métodos
    Latir(){
        console.log('latir');  
    }

}

// readonly, private, public (default)

class Jogador {
    nome : string;
    numero : number
    constructor (nome:string, numero:number){
        this.nome = nome
        this.numero = numero
    }

    chutar(){
        console.log(this.nome + ' chutou a bola');
    }
}


class TimeDeFutebol {
    nome : string;
    jogadores : Jogador[];
    tecnico : string;

    constructor (nome:string, jogadores:Jogador[], tecnico:string){
    this.nome = nome
    this.jogadores = jogadores
    this.tecnico = tecnico
    }

    jogando(){
    for (const jogador of this.jogadores){
        jogador.chutar()
    }
    }
}

const jogador = new Jogador('Samuel', 8)
const jogador2 = new Jogador('João', 8)
const jogador3 = new Jogador('Patrick', 8)
const saoPaulo = new TimeDeFutebol('São Paulo', [jogador, jogador2, jogador3], 'Murici Ramalho')
saoPaulo.jogando()

// console.log(saoPaulo);

// Objeto === chave/valor

// Exercícios de classe