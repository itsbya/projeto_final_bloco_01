import { Pedido } from "../model/Pedido";
import { PedidoRepository } from "../repository/PedidoRepository";
import { Colors } from "../util/Colors";

export class PedidoController {
  constructor(private pedidoRepository: PedidoRepository) {}

  listaPedidos(): void {
    const pedidos = this.pedidoRepository.buscarTodosPedidos();
    console.log(pedidos);
  }

  criarPedido(pedido: Pedido): void {
    this.pedidoRepository.salvarPedido(pedido);
    console.log(`${Colors.fg.green} \n O pedido ${pedido.id} foi criado com Sucesso ${Colors.fg.green}` );
  }
}
