import { Produto } from "./Produto";


export class JogoFisico extends Produto {
     private _plataforma: string;


	constructor(produtoId: number, nomeProduto: string, tipo: number, preco: number, classificacao: number, plataforma: string) {

        super(produtoId, nomeProduto, tipo, preco, classificacao);
		this._plataforma = plataforma;
	}



   // Metodos Get e SET
	public get plataforma(): string {
		return this._plataforma;
	}

	public set plataforma(value: string) {
		this._plataforma = value;
	}


    //Visualizar Jogo Fisico
    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de plataforma:", this._plataforma)
    }



}