const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com"
}

/*para acessar uma chave separadamente é nescessário criar uma lista com os elementos tendo o mesmo nome das chaves do objeto que você está querendo 
acessar. Ai depois tem que colocar o objeto que você quer acessar, dopois a lista com o indice do elemento que corresponde a chave do objeto.

Outra maneira de acessar as chaves é através do forEach, mas também é nescessário que se crie um lista de elementos que corresponda com os 
mesmos nomes das chaves do objeto que você quer acessar. chaves.forEach(info => console.log(cliente[info]));


Outra maneira de acessar as chaves, mas não muito usual é da seguinte forma: console.log(cliente["nome"]); 
*/

const chaves = ["nome", "idade", "cpf", "email"]; // essa forma representa a primeira explicação.




console.log(cliente[chaves[0]]);

