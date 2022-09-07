const notas = [10, 9, 8, 7, 6];

                                        //DESAFIO INCREMENTANDO 1 PONTO NA NOTA.


                                   //aqui estamos usando o operador ternário para não adicionar um ponto em quem já tem nota 10.  
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
/* quando for incrementado 1 ponto nas notas tem que ser ao contrario do que costumamos fazer dentro de uma estrutura de repetição, no caso temos que 
colocar o incremento antes de notas, se for ao contrário a operação se perde e não obtemos o resultado esperado.*/

console.log(notasAtualizadas);


/* O map diferente do forEach retorna algo, sendo assim tudo que ele faz é retornado dentro dentro de uma nova array e o método do forEach ele só executa o 
código que foi passado para ele.
*/
// PARA AJUDAR NA COMPREENSÃO ABRA O ARQUIVO: ternario.js;