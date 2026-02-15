import { Cliente } from "../model/Cliente";
import { Produto } from "../model/Produto";
import { Colors } from "../util/Colors";



export class VendaController{

    public comprar(cliente: Cliente, produto: Produto): void{
        if(cliente.idade < produto.classificacao) {
                console.log(Colors.fg.red, 'Cliente não possui idade permitida.', Colors.reset);
        return;
        }

        console.log(Colors.fg.red, 'Cliente não possui idade permitida.', Colors.reset);
    }
    


}