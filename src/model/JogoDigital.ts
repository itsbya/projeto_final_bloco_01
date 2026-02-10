import { Produto } from "./Produto";

export class JogoDigital extends Produto {
    private _tamanhoGB: number;


	constructor(produtoId: number, nomeProduto: string, tipo: number, preco: number, classificacao: number ,tamanhoGB: number) {

        super(produtoId, nomeProduto, tipo, preco, classificacao);
		this._tamanhoGB = tamanhoGB;
	}



   // Metodos Get e SET
	public get tamanhoGB(): number {
		return this._tamanhoGB;
	}


	public set tamanhoGB(value: number) {
		this._tamanhoGB = value;
	}

     

    //Visualizar Jogo Fisico
    public visualizar(): void { 
        super.visualizar();
        console.log("Tamanho de download:", this._tamanhoGB, 'GB');
    }
}