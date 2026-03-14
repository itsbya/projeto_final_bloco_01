import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";
import { Colors } from "../util/Colors";
import { Input } from "../util/Input";

export class ClienteController implements ClienteRepository {
    private listaClientes = new Array<Cliente>();
    public numero : number = 0;


    //CRUD
    cadastrarCliente(cliente: Cliente): void {
       this.listaClientes.push(cliente);
       console.log(`${Colors.fg.green} Cliente ${cliente.nome} cadastrado com sucesso! ${Colors.reset}`);
    }


    listarCliente(): void {
        if(this.listaClientes.length === 0){
            console.log(`${Colors.fg.red} A lista esta vazia! ${Colors.reset}`);
        }
        for(let cliente of this.listaClientes){
            cliente.visualizar();
        }
    }


    buscarClienteId(numero: number): void {
        const buscarCliente = this.buscarNoArray(numero);

        if(buscarCliente !== null) {
            buscarCliente.visualizar();
        }else{
            console.log(`${Colors.fg.red} Cliente não encontrado! ${Colors.reset}`);
        }
    }



    alterarCliente(cliente: Cliente): void {
        const buscarCliente = this.buscarNoArray(cliente.id)

               if(buscarCliente !== null){
            
            this.listaClientes[this.listaClientes.indexOf(buscarCliente)] = cliente;
            console.log(`${Colors.fg.green} \n O Produto ${cliente.id} foi Atualizado com Sucesso ${Colors.fg.green}` );
        }   
        else {
            console.log(`${Colors.fg.red} \n O Produto não foi encontrado! ${Colors.reset}`)
    }
    }



    deletarCliente(numero: number): void {
          const buscarProduto = this.buscarNoArray(numero);
                let validacao: string;
        
                if(buscarProduto !== null){
                validacao = Input.question(`Deseja realmente apagar o cliente ${numero}? (S) Sim (N) Não `).toUpperCase();
                
                if(validacao === "S"){
                    this.listaClientes.splice(this.listaClientes.indexOf(buscarProduto), 1)
                    console.log(`${Colors.fg.green} \n O Cliente ${buscarProduto.nome} foi apagado com Sucesso! ${Colors.reset}` );
                }   
                
                else if(validacao === "N"){
                    return;
                }
              }
    }



    //Métodos auxiliares
     public gerarId(): number{
        return ++ this.numero;
    }



    public buscarNoArray(numero: number): Cliente | null {
      return this.listaClientes.find(
        cliente => cliente.id === numero
      ) || null;
    }
    
}