export class Cliente{
    private _id: number;
    private _nome: string;
    private _idade: number;



	constructor(id: number, nome: string, idade: number) {
		this._id = id;
		this._nome = nome;
		this._idade = idade;
	}
    


    //Getters
	public get id(): number {
		return this._id;
	}


	public get nome(): string {
		return this._nome;
	}


	public get idade(): number {
		return this._idade;
	}



    //Setters
	public set id(value: number) {
		this._id = value;
	}

    
	public set nome(value: string) {
		this._nome = value;
	}

   
	public set idade(value: number) {
		this._idade = value;
	}


    

    //Método auxiliar
    public visualizar(): void{
        console.log("\n====================================")
        console.log("||          DADOS DO CLIENTE      ||")
        console.log("======================================")
        console.log(`Numero do cliente: ${this._id} `);
        console.log(`Nome do cliente: ${this._nome} `);
        console.log(`Idade cliente:  ${this._idade}   `);
       
    }

}