
// DESAFIO: temos que gerar uma função que permita a criação de novos clientes a partir de um modelo.

function cliente(nome, cpf, email, saldo) { // cliente genérico e a partir desse modelo criarmos quantos clientes quisermos, com as mesmas propriedades, 
    //servindo também como uma função construtora.
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) { /*criamos um método depositar, que é o nosso comportamento digamos assim, ele vai receber um valor e vai incrementar
         o valor de saldo com o que tivermos passando aqui por parâmetro*/
        this.saldo += valor;    
    }
}

const alan = new cliente("Alan", "204350732475023", "andre@gmail.com", 100); 
/* function cliente() ela vai servir para nós aqui como uma função construtora, então criei um objeto agora cliente com base nessa função, então essa 
função vai sempre possuir para mim um objeto cliente, e eu vou usar ela aqui agora como uma função construtora, como se fosse um template, Então vou fazer
aqui const alan = new cliente().Essa palavra reservada new, serve para dizer que justamente estamos utilizando a partir da nossa função cliente, estamos 
criando um new, criando um novo cliente, chamamos isso de instância, então a nossa const andre é uma nova instância de cliente criado a partir da nossa 
função construtora.

Quando criamos o nosso new cliente() passei  entre parâmetros os dados reais desse cliente, então new cliente() abre e fecha parênteses e dentro dele os 
quatro parâmetros da nossa função cliente, ou seja, o nome que ele colocou uma string Alan, o cpf ele colocou uma string com o cpf fictício, 204350732475023 
o número que você quiser, uma outra com o e-mail dele e no final um número com um saldo, const alan = new cliente("Alan", "204350732475023", 
"andre@gmail.com", 100); agora é s[o dar um console.log.
*/

console.log(alan);