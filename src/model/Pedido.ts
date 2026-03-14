export class Pedido {
    private _id: number;
    private _clienteId: number;
    private _produtoId: number;
    private _quantidade: number;
    private _total: number;
    private _data: Date;
    



	constructor(id: number, 
        clienteId: number, 
        produtoId: number, 
        quantidade: number, 
        total: number, data: Date) {

		this._id = id;
		this._clienteId = clienteId;
		this._produtoId = produtoId;
		this._quantidade = quantidade;
		this._total = total;
		this._data = data;
	}



   //Getters
	public get id(): number {
		return this._id;
	}


  
	public get clienteId(): number {
		return this._clienteId;
	}


   
	public get produtoId(): number {
		return this._produtoId;
	}


 
	public get quantidade(): number {
		return this._quantidade;
	}


    
	public get total(): number {
		return this._total;
	}


  
	public get data(): Date {
		return this._data;
	}

    

    //Setters
	public set id(value: number) {
		this._id = value;
	} 


   
	public set clienteId(value: number) {
		this._clienteId = value;
	}


   
	public set produtoId(value: number) {
		this._produtoId = value;
	}


  
	public set quantidade(value: number) {
		this._quantidade = value;
	}


  
	public set total(value: number) {
		this._total = value;
	}


  
	public set data(value: Date) {
		this._data = value;
	}



    //Método auxiliar
    public visualizar(): void{
         console.log("\n====================================")
        console.log("||          DADOS DO PEDIDO      ||")
        console.log("======================================")
        console.log(`ID: ${this._id} `);
        console.log(`Cliente Id: ${this._clienteId}`);
        console.log(`Produto Id: ${this._produtoId}`);
        console.log(`Quantidade: ${this._quantidade}`);
        console.log(`Total: ${this._total}`);
        console.log(`Data: ${this._data}`);
    }


}