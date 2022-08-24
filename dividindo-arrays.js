const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 
'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length/2);
/*o método .slice serve para "cortar" uma variável em algum ponto dela, dependendo de onde você queira que seja cortado, nessa aula partimos uma lista de
alunos no meio e distribuimos em duas lista diferentes.

// no sala1 .slice recebeu os parâmetro:
0 = que é pra começar  do primeiro indice da lista de nomes.
nomes.lenght / 2 = está dizendo que é para ir até a metade da lista, onde nomes.lenght pega a lista inteira e depois dividimos por dois 2, para ir só até a
metade.

// no sala2 .slice recebeu os parâmetros: 
nomes.lenght / 2 = está dizendo que é para começar do começo da lista em diante/até o final.

// DETALHE: SEMPRE O PRIMEIRO PARÂMETRO DEFINE O PONTO DE PARTIDA DO CORTE.
*/

console.log(`Alunos da sala 1: ${sala1}.`);
console.log(`Alunos da sala 2: ${sala2}.`);