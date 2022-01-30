var prompt = require('prompt-sync')();

let objeto = [];
                console.log("Digite (S) para execultar a ação ou (N) para não execultar a ação");
const perguntas = [" Diante do bruxo, Guerreira joga sua primeira espada anti magia para bloquear energia vital sendo sugado do povo: "

                ,"Guerreira com sua segunda espada, corta o braço direito do bruxo: "

                ,"O bruxo com suas habilidades joga um feitiço capaz de congelar, a guerreira pode esquivar: "

                ," Bruxo se enfurece e ganha super velocidade, chegando o por traz, Porém a guerreira é capaz de perceber, ela o golpeia com seu giro junto a segunda espada: "

                ," Bruxo libera um poder das sombras capaz de prender, mais a guerreira com sua primeira espada anti magia consegue bloqueiar o ataque: "];


for (res = 0; res < perguntas.length; res++){
            

        while (true){

            respostas = prompt(perguntas[res]);

            if (
                respostas.trim().toLowerCase() == "s" ||
                respostas.trim().toLowerCase() == "n"
              ) {
                objeto.push(respostas);
                break;
              }
            console.log(" Digite S para sim ou N para não");
            }
        }
console.log(objeto);

let quantidadeElementos = objeto.filter(x => x === "s").length;

console.log("O array possui " + quantidadeElementos + " elementos iguais a 's'")



if (quantidadeElementos == 5){
    console.log("Guerreira derrota o bruxo e é honrrada e coroada pelo povo, mantendo a paz e segurança do habitantes.")
}

else if(quantidadeElementos == 4){
    console.log("Após derrotar o bruxo guerreira fica com um ferimento causado pelo bruxo e é atendida pelos medico do povo salvando sua vida")
}
else if(quantidadeElementos == 3){
    console("Apos uma grande batalha guerreira é atingida por dois golpes, porém guerreira em sua vantagem de batalha deixa o bruxo caido e o povo ajuda a guerreira a prender o bruxo caido e vencem a batalha")
}

else if(quantidadeElementos == 2){
    console.log("Apos a guerreira salvar o povo do bruxo que estava sugando suas energias vitais, a guerrei acaba sendo atigidas por 3 golpes e sendo obrigada fugir com seu povo devido aos golpes fatais.")
}

else if (quantidadeElementos == 1){
    console.log("Guerreira consegue libertar o seu povo com um dos golpes atigidos no bruxo e o povo foge, porém a guerreira é derrota.")
}

else if (quantidadeElementos == 0){
    console.log("Guerreira falha miseravélmente em seus ataques, com o poder que bruxo adiquiriu roubando a energia vital do povo, ele conquista uma nação causando destruição ao redor.")
}







