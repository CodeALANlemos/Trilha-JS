const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamada.splice(1, 2, 'Rodrigo'); /* Vai permitir que removamos alguns elementos de qualquer lugar dentro do array e coloque novos elementos em 
qualquer lugar dentro desse array também. Ele agora vai pedir três parâmetros.  O primeiro parâmetro é em qual índice ele vai começar. No caso, a Ana 
e o Caio que temos que remover. A Ana é o índice número 1, lembrando que o array começa no 0 e depois no terciero parâmetro adicionamos o rodrigo. */ 

/* RELEMBRANDO OS PARÂMETROS DO SPLICE: 

// primeiro parâmetro é o índice onde vamos começar a alterar incluindo.
// Segundo parâmetro é o número de elementos que vamos remover, vamos remover dois elementos, ou seja, o elemento que está no índice 1 e o seguinte,
vamos remover Ana e Caio.
// terceiro é o que vai ser colocado no lugar, então retira Ana e Caio e coloca Rodrigo no lugar dele.

Se você quiser somente retirar um pedaço da array, retirar Ana e Caio sem colocar o Rodrigo no lugar, você não precisa passar o terceiro parâmetro,
mas nesse caso não é necessário porque o desafio pedia para colocarmos mais um aluno.
*/


/* listaDeChamada.splice(2, 0, 'Rodrigo');  Nós podemos se colocarmos no segundo parâmetro valor 0, ele não vai apagar ninguém, mas podemos começar a 
colocar novos elementos dentro do nosso array em qualquer posição. Então, também tem essa função o splice.*/



console.log(`Lista de chamadas: ${listaDeChamada}`);

