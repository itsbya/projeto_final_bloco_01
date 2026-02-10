
import { JogoFisico } from "./src/model/JogoFisico"
import { JogoDigital } from "./src/model/JogoDigital"
import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";
import { ProdutoController } from "./src/controller/ProdutoController";



/* TESTES INICIAIS COMENTADOS

Testes JOGO FISICO
const jF1 = new JogoFisico(1, 'God of War', 1, 299.00, 18, 'PS5');

console.log(`A plataforma é : ${jF1.plataforma}`);
console.log(`O preço é : ${formatarMoeda(jF1.preco)}`);


//Testes JOGO DIGITAL
const jD1 = new JogoDigital(1, 'GTA 6', 2, 500.00, 18, 6);

console.log(`O tamanho é : ${jD1.tamanhoGB}`);
console.log(`O preço é : ${formatarMoeda(jD1.preco)}`);
*/



//criar objeto global da classe Produto controller
const produtos = new ProdutoController();

//criar Array contendo os tipos de produtos
const tiposProdutos = ['Jogo Fisico', `Jogo Digital`];


export function main(){


    while(true){
console.log(Colors.bg.black, Colors.fg.magenta,
            "\n==================================================");
console.log("||                GEEK.COM                        ||");
console.log("====================================================");
console.log("||         |1| Criar PRODUTO                      ||");
console.log("||         |2| Listar todos os Produtos           ||");
console.log("||         |3| Buscar produto por ID              ||");
console.log("||         |4| Atualizar Produto                  ||");
console.log("||         |5| Apagar Produto                     ||");
console.log("||         |6| Aplicar desconto                   ||");
console.log("||         |0| Sair                               ||");
console.log("====================================================");
console.log("                                                  ",
Colors.reset);


    console.log("Digite a opção desejada:")
    let opcao = Input.questionInt("")

    

    switch(opcao){

        case 1:
          console.log(Colors.fg.whitestrong, "\n\nCriar Produto\n\n", Colors.reset);
             
            criarProduto()
            keyPress();
        break;

        case 2:
            console.log(Colors.fg.whitestrong, "\n\nListar todas os Produto\n\n", Colors.reset);
                
            
            listarTodasContas()
            keyPress();

        break;

        case 3:
           console.log(Colors.fg.whitestrong, "\n\nConsultar dados do Produto - por número\n\n", Colors.reset);
            
            buscarProduto()
            keyPress();

        break;
        case 4:
            console.log(Colors.fg.whitestrong, "\n\nAtualizar dados do Produto\n\n", Colors.reset);
            
            atualizarProduto();
            keyPress();
         

        break;
        case 5:
            console.log(Colors.fg.whitestrong, "\n\nApagar um Produto\n\n", Colors.reset);
            
            deletarProduto();
            keyPress();


        break;

        case 6:
            console.log(Colors.fg.whitestrong, "\n\nApagar um Produto\n\n", Colors.reset);
            
            aplicarDesconto();
            keyPress();


        break;


        case 0:
        sobre();
        process.exit(0);
        break;

        }

    }
  
}


    //Opção 1: Criar um novo produto
        function criarProduto(){

            //Nome PRODUTO
            console.log("Digite o Nome do Produto")
            const nomeProduto = Input.question("")
            
            //Preço do Produto
            console.log("Digite o Preço do Produto")
            const precoProduto = Input.questionFloat("");


            //Tipo de Produto
            console.log("Digite o Tipo de Produto:")
            const tipo = Input.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

            //Classificação
            console.log("Digite o Tipo de classificação:")
            const classificacaoProduto = Input.questionInt("");




            //Escolha de tipo de Produtos

            switch (tipo){

                case 1:  
                    console.log('Digite a plataforma: ')
                    const plataforma = Input.question('');
                produtos.cadastrar(new JogoFisico(produtos.gerarId(), nomeProduto, tipo, precoProduto, classificacaoProduto, plataforma ))    
                break;

                case 2:
                    console.log('Digite o tamanho do Jogo: ')
                    const tamanhoGB = Input.questionFloat('');
                produtos.cadastrar(new JogoDigital(produtos.gerarId(), nomeProduto, tipo, precoProduto, classificacaoProduto, tamanhoGB))
                break;
            }
        }


           // Opção 2: Lista todas as contas cadastradas
 
            function listarTodasContas(): void{
                 produtos.listarTodas();
            }




            //Opção 3: Buscar Produtos
            function buscarProduto(): void{
            console.log("Digite o Numero do Produto:")
            const numero = Input.questionInt("")
                produtos.procurarPorId(numero);

            }




            //Opção 4: ATUALIZAR PRODUTO
            function atualizarProduto(): void{

            console.log("Digite o Numero do Produto:")
            const numero= Input.questionInt("");

            const produto = produtos.buscarNoArray(numero);

            if(produto !== null){


            let nomeProduto = produto.nomeProduto;
            let precoProduto = produto.preco;
            const tipo = produto.tipo;
            const classificacaoProduto = produto.classificacao;

            

            console.log(`Nome do produto atual: ${nomeProduto}`)
            console.log("Digite o novo nome do Produto: \n (Pressione Enter para manter o valor atual");
            let entrada = Input.question("");
            
            nomeProduto=entrada.trim() === "" ? nomeProduto:entrada;


            console.log(`Preço do produto atual: ${formatarMoeda(precoProduto)}`)
            console.log("Digite o novo preço do Produto: \n (Pressione Enter para manter o valor atual");
            entrada = Input.question("");
            precoProduto = entrada.trim() === "" ? precoProduto:parseFloat(entrada.replace(",","."))

            
            console.log("Tipo do produto atual:", tipo)
            console.log("Digite o Tipo de Produto:")
            const tipo1 = Input.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;


            // Laço SWITCH ATUALIZAR PRODUTO
            switch(tipo1){
                    case 1:  
                    console.log('Digite a plataforma: ')
                    const plataforma = Input.question('');
                produtos.atualizar(new JogoFisico(numero, nomeProduto, tipo, precoProduto, classificacaoProduto, plataforma )) 
               
                break;

                case 2:
                    console.log('Digite o tamanho do Jogo: ')
                    const tamanhoGB = Input.questionFloat('');
                produtos.atualizar(new JogoDigital(numero, nomeProduto, tipo, precoProduto, classificacaoProduto, tamanhoGB))
               
                break;
            }
            }

            }


            
           //OPÇÃO 5: APAGAR PRODUTO

           function deletarProduto():void{
            console.log("Digite o ID do Produto")
            const numero = Input.questionInt("")
            let validacao = Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase();
        
           if(validacao === "S")
           produtos.deletar(numero);

           else return;
        
           }


           //Opção 6: Criar um novo produto
        function aplicarDesconto(){

            console.log("Digite o ID do Produto");
            const idProduto: number = Input.questionInt('');

            let produto = produtos.buscarNoArray(idProduto)

            if(produto === null ) {
                console.log(`${Colors.fg.red} \n O Produto não foi encontrado! ${Colors.reset}`);
                return;
            }

             console.log("Digite o percentual de Desconto");
            const percentualDesconto: number = Input.questionFloat('');

             if (percentualDesconto <= 0 || percentualDesconto > 50) {
                 console.log(`${Colors.fg.red} \n Desconto inválido. Permitido apenas entre 1% e 50%. ${Colors.reset}`);
                return;
             }

             produto.aplicarDesconto(percentualDesconto);
             
            console.log(`${Colors.fg.green} \n Desconto aplicado com sucesso! ${Colors.fg.green}` );
            console.log(`Novo preço: ${formatarMoeda(produto.preco)}`);
  }

 





    function sobre(): void {
    console.log(Colors.bg.black, Colors.fg.cyan, 
             "\n*****************************************************");
    console.log("PROJETO DESENVOLVIDO POR : Ana Beatriz");
    console.log("Email - anabeatrizcarvalhoesmaile@gmail.com");
    console.log("github.com/itsbya");
    console.log("*****************************************************");
}
  

    /* Função de pausa entre as opções do menu */
    function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();