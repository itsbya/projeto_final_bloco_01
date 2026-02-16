export class Cliente{
    private _id: number;
    private _nome: string;
    private _idade: number;
    private _genero: string;



	constructor(id: number, nome: string, idade: number, genero: string) {
		this._id = id;
		this._nome = nome;
		this._idade = idade;
        this._genero = genero;
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
    

    public get genero(): string {
		return this.genero;
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


    public set genero(value: string) {
		this.genero = value;
	}


    

    //Método auxiliar
    public visualizar(): void{
        console.log("\n====================================")
        console.log("||          DADOS DO CLIENTE      ||")
        console.log("======================================")
        console.log(`ID: ${this._id} `);
        console.log(`Nome: ${this._nome} `);
        console.log(`Idade:  ${this._idade}`);
        console.log(`Genero:  ${this.genero}`);
    }

}