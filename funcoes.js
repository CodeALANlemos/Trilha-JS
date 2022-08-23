/*
let x = "";
console.log(x);
x = "oi";
*/

// DELCARAÇÃO DE FUNÇÃO;

// 1) Declara a função;

function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executa a função (1 ou mais vezes);

imprimeTexto("isssquéeciiiiii");

// 3) Função com soma de números;

/*function soma(x,y) {
   return x + y;
}

var numeros = soma(10, 49)

//console.log(numeros)*/


// E se quisermos colocar uma função dentro de outra função, será que funciona? BoraVê.
// está função é sem paramêtros.

function soma () {
    return 2 + 2;
}

imprimeTexto(soma()); /*O que está acontecendo é que o nosso código está executando a função imprimeTexto. Só que uma vez que executamos a função soma 
dentro dos parênteses, o JavaScript vai pegar a função soma; ele está executando a 
função soma, pegando o valor de retorno dela, que é 2 + 2 e passando o mesmo para dentro de (texto).

 Então, o bloco de function deixa de ser string e passa a ser 2 + 2, que é o valor de soma.

 Nós fizemos uma dancinha das cadeiras, fomos tirando as coisas de um lugar, passando para outro e passando para outro; e isso é comum no dia a dia. 
 Em linguagens de programação chamamos a função, pega o resultado de uma função, passa para outra e assim vamos fazendo com que cada trecho de código faça,
exatamente, pequenas tarefas e essas pequenas tarefas viram uma tarefa grande. 

======================================================================================================

As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e
mais legível, O JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
========================
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
========================
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
========================
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
=========================
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
=========================
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
=========================
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
=========================
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
=========================
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
Para ver mais funções matemáticas, basta acessar a documentação do Math: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description.


*/