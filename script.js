var prompt = require('prompt-sync')();



///Uma guerreira que  percorreu um longo caminho para enfrentar um bruxo e salvar seu povo.
/// A guerrei possui duas espadas uma anti magia e a outra para ataques frontais.

let cont = "";


console.log('Digite: 1 para sim ou Digite: 2 para não')
        perg1 = prompt("Pergunta 1: Diante do bruxo, Guerreira joga sua primeira espada anti magia para bloquear energia vital sendo sugado do povo: ");
        if (perg1 == 1){
                cont++;
        }
        
        
        perg2 = prompt("Pergunta 2: Guerreira com sua segunda espada, corta o braço direito do bruxo: ");
        if (perg2 == 1){
                cont++;
        }
        
        perg3 = prompt("Pergunta 3: O bruxo com suas habilidades joga um feitiço capaz de congelar, a guerreira pode esquivar: ");
        if (perg3 == 1){
                cont++;
        }


        
        perg4 = prompt("Pergunta 4: Bruxo se enfurece e ganha super velocidade, chegando o por traz, Porém a guerreira é capaz de perceber, ela o golpeia com seu giro junto a segunda espada: ");
        
        if (perg4 == 1){
                cont++;
        }

        
        perg5 = prompt("Pergunta 5: Bruxo libera um poder das sombras capaz de prender, mais a guerreira com sua primeira espada anti magia consegue bloqueiar o ataque: ");

        if (perg5 == 1){
                cont++;
        }



console.log(cont)