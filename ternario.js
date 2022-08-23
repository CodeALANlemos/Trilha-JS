const idadeMin = 18;
const idadeClient = 18;

/* comparação clássica.

if(idadeClient < idadeMin) {
    console.log("Tu não pode beber");
} else {
    console.log("Tu podes beber MEU.");
}

*/


// ternário


                    //condição            //true                //false
console.log(idadeClient < idadeMin ? "Tu não pode beber" : "Tu podes beber MEU"); 
/* o ponto de ? e o : servem para separar a condição do true e do false, ou seja se o idadeClient for < idadeMin ele vai executar ? "Tu não pode beber" 
mas se o idadeClient for maior que idadeMin ele vai executar : "Tu podes beber MEU"*/

// obs: não é uma boa prática usar ele quando se tem muito código a ser comparado, pois é ruim de dar manutenção e tem sua legibilidade mais complexa.
// o nome ternário é porque tem 3 operadores de comparação que são: > ? e o :