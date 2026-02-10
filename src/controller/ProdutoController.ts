import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Colors } from "../util/Colors";
import { Input } from "../util/Input";


export class ProdutoController implements ProdutoRepository {

    private listarProdutos = new Array<Produto>();
    public numero: number = 0;
    

    //CRUD
    procurarPorId(numero: number): void {
        const buscarProduto = this.buscarNoArray(numero);

       if(buscarProduto !== null){
         buscarProduto.visualizar();
       }
       else 
       console.log(`${Colors.fg.red} Produto não encontrado! ${Colors.reset}`);
       
    }



    listarTodas(): void {
        if(this.listarProdutos.length === 0 )
        console.log(`${Colors.fg.red} A lista esta vazia! ${Colors.reset}`);

        else
            this.listarProdutos.forEach(produto => produto.visualizar());
    }



    cadastrar(produto: Produto): void {
        this.listarProdutos.push(produto);
        console.log(`${Colors.fg.green} O produto numero ${produto.produtoId} foi cadastrado com sucesso ${Colors.reset}`);

    }



    atualizar(produto: Produto): void {
         const buscarProduto = this.buscarNoArray(produto.produtoId);

        if(buscarProduto !== null){
            
            this.listarProdutos[this.listarProdutos.indexOf(buscarProduto)] = produto;
            console.log(`${Colors.fg.green} \n O Produto ${produto.produtoId} foi Atualizado com Sucesso ${Colors.fg.green}` );
        }   
        else {
            console.log(`${Colors.fg.red} \n O Produto não foi encontrado! ${Colors.reset}`)
    }
}



    deletar(numero: number): void {
         const buscarProduto = this.buscarNoArray(numero);
        let validacao: string;

        if(buscarProduto!== null){
        validacao= Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase();
        
        if(validacao === "S"){
            this.listarProdutos.splice(this.listarProdutos.indexOf(buscarProduto), 1)
        }   
        
        else if(validacao === "N"){
            return;
        }
      }
    }



     public gerarId(): number{
        return ++ this.numero;
    }


    
    public buscarNoArray(numero:number): Produto | null{
        this.listarProdutos.forEach( produto => {
            if(produto.produtoId === numero){
                return produto;
            }
        }) 

         return null;
        }
    
}

