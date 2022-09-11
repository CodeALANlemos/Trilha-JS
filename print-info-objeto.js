const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(`Sou portador do cpf ${cliente.cpf.substring(0,9)} e meu email é ${cliente.email}`); /* o para poder imprimir alguma informação da estrutura do
 objeto é nescessário usar um . depois da palavra declarada e depois colocar qual informação tu quer que seja impressa, no caso a informação é a sub chave 
 que foi delcarada dentro da estrutura.*/

 // e o substring é uma funçãozinha que recebe dois parâmetros, indicando qual caracteres de uma string deve aparecer, sendo o primeiro número o ponto de
//partida e o segundo o limite.