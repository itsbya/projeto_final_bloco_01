
import { JogoFisico } from "./src/model/JogoFisico"
import { JogoDigital } from "./src/model/JogoDigital"
import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";



//Testes JOGO FISICO
const jF1 = new JogoFisico(1, 'God of War', 1, 299.00, 18, 'PS5');

console.log(`A plataforma é : ${jF1.plataforma}`);
console.log(`O preço é : ${formatarMoeda(jF1.preco)}`);


//Testes JOGO DIGITAL
const jD1 = new JogoDigital(1, 'GTA 6', 2, 500.00, 18, 6);

console.log(`O tamanho é : ${jD1.tamanhoGB}`);
console.log(`O preço é : ${formatarMoeda(jD1.preco)}`);

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
console.log("||         |0| Sair                               ||");
console.log("====================================================");
console.log("                                                  ",
Colors.reset);


    console.log("Digite a opção desejada:")
    let opcao = Input.questionInt("")

    

    switch(opcao){

        case 1:
            console.clear();
            console.log("=======================================")
            console.log("||          Criar Produto            ||")
            console.log("=======================================")
        
            keyPress();
        break;

        case 2:
            console.clear();
            console.log("=======================================")
            console.log("||       Listar todos os Produtos      ||")
            console.log("=======================================")
           
            keyPress();

        break;

        case 3:
            console.clear();
            console.log("=======================================")
            console.log("||           Buscar Produto        ||")
            console.log("=======================================")
            
            keyPress();

        break;
        case 4:
            console.clear();
            console.log("=======================================")
            console.log("||         Atualizar Produto        ||")
            console.log("=======================================")
            
         

        break;
        case 5:
            console.clear();
            console.log("=======================================")
            console.log("||          Apagar Produto          ||")
            console.log("=======================================")
            


        break;

        case 0:
        sobre();
        process.exit(0);
        break;

        }

    }
  
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