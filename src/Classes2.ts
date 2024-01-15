class Produto {
    quantidade: number;
    preco: number;
    nome: string;

    constructor (quantidade:number, preco:number, nome:string) {
        this.quantidade = quantidade
        this.preco = preco
        this.nome= nome
    }

    valorTotal():number{ //Obrigatoriamente tem que retornar um number
        return this.quantidade * this.preco
    }
}

class Venda{
    produtos: Produto[];

    constructor(produtos:Produto[]) {
        this.produtos = produtos
    }

    valorTotaldaVenda(){
        let valorTotal = 0
        for (const produto of this.produtos){
           const valorTotalProduto = produto.valorTotal()
           valorTotal = valorTotal + valorTotalProduto
        }
        return valorTotal
    }

}

const camisaSaoPaulo = new Produto(2,150,"Camiseta do São Paulo")

// console.log(camisaSaoPaulo);

const camisaCorinthians = new Produto(1,100,"Camiseta do Corinthians")

const valorCamisaSaoPaulo = camisaSaoPaulo.valorTotal()

// console.log(valorCamisaSaoPaulo);

const venda1 = new Venda([camisaSaoPaulo, camisaCorinthians])

console.log(venda1.valorTotaldaVenda());
