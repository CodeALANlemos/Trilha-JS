const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"],
    dependentes: [
        { 
          nome: "Tiringa",
          parentesco: "Parceiro",
          dataNasc: "20/03/1960", 
          apelido: "Cu de gambá" },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo:100,
    depositar:function(valor) { 
        this.saldo += valor /* this é uma palavra reservada que faz referência ao próprio objeto. A função depositar funciona assim:
        o this.saldo equivale a 100, como declarado inicialmente, depois esse saldo é somado com o parâmetro valor e esse parâmetro é declarado no momento 
        em que chamamos a função depositar.*/
    }   
}
console.log(`Saldo anterior: ${cliente.saldo}`);
cliente.depositar(30);
console.log(`Saldo atual: ${cliente.saldo}`);

/*
Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para 
que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo 
local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagemCOPIAR CÓDIGO
Se alterarmos apenas o objPersonagem2, o resultado é:

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer
 alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao 
 original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100
Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método 
Object.create():

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.Dessa forma, objPersonagem2 é uma instância diferente
de objPersonagem e pode ser trabalhada de forma independente.

Você pode ver mais exemplos desse método na documentação do MDN.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create
*/