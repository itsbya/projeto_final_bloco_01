import { Pedido } from "../model/Pedido";

export interface PedidoRepository {
 
    //CRUD
    buscarTodosPedidos(): Pedido[];
    buscarPorPedidoId(numero: number): Pedido | undefined;
    salvarPedido(pedido: Pedido): Pedido;
    atualizarPedido(pedido: Pedido): Pedido;
    deletePedido(id: number): void;
}