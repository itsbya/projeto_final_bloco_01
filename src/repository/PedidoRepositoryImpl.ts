import { Cliente } from "../model/Cliente";
import { Pedido } from "../model/Pedido";
import { Produto } from "../model/Produto";
import { PedidoRepository } from "./PedidoRepository";
import { Colors } from "../util/Colors";
import { Input } from "../util/Input";



export class PedidoController implements PedidoRepository{

    private listaPedidos: Pedido[] = [];
    public numero: number = 0;


    //CRUD
    buscarTodosPedidos(): Pedido[] {
        return this.listaPedidos;
    }


    buscarPorPedidoId(numero: number): Pedido | undefined {
        return this.listaPedidos.find(pedido => pedido.numero === numero);
    }


    salvarPedido(pedido: Pedido): Pedido {
       this.listaPedidos.push(pedido);
       return pedido;

    }


    atualizarPedido(pedido: Pedido): Pedido {
       const index = this.listaPedidos.findIndex(pedido => pedido.numero === pedido.numero);
        if(index >= 0) {
            this.listaPedidos[index] = pedido;
        }
        return pedido;
    }



    deletePedido(numero: number): void {
        const buscarProduto = this.buscarNoArray(numero);
                        let validacao: string;
                
                        if(buscarProduto !== null){
                        validacao = Input.question(`Deseja realmente apagar o cliente ${numero}? (S) Sim (N) Não `).toUpperCase();
                        
                        if(validacao === "S"){
                            this.listaPedidos.splice(this.listaPedidos.indexOf(buscarProduto), 1)
                            console.log(`${Colors.fg.green} \n O Pedido ${buscarProduto.id} foi apagado com Sucesso! ${Colors.reset}` );
                        }   
                        
                        else if(validacao === "N"){
                            return;
                        }
                      }
    }


    //Método auxiliar
    public buscarNoArray(numero: number): Pedido | null {
      return this.listaPedidos.find(
        pedido => pedido.id === numero
      ) || null;
    }


    
    public comprar(cliente: Cliente, produto: Produto): void{
        if(cliente.idade < produto.classificacao) {
                console.log(Colors.fg.red, 'Cliente não possui idade permitida.', Colors.reset);
        return;
        }

        console.log(Colors.fg.red, 'Cliente não possui idade permitida.', Colors.reset);
    }
    


}