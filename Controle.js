let readlineSync = require('readline-sync');

var quantidade, i;

quantidade = readlineSync.question("Digite o numero de alunos :");

for(i = 0; i <= quantidade; i++ ) {

    if(i == 0){
        console.log("O valor " + i + " é zero");
    }
        else if(i % 2 == 0) {
            console.log("O valor "+ i +  " é par");
        }
            else{
                console.log("O valor " + i + " é impar");
            }
    

}


