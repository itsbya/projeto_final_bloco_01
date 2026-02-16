import { Cliente } from "../model/Cliente";

export interface ClienteRepository {

    //CRUD
    cadastrarCliente(cliente: Cliente): void;
    listarCliente(): void;
    buscarClienteId(numero: number): void;
    alterarCliente(cliente: Cliente): void;
    deletarCliente(numero: number): void;

}