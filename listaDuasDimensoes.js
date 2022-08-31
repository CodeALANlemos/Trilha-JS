const alunos = [`João`, `Juliana`, `Caio`, `Ana`];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]; // lista de duas dimensões.

console.log(`${listaDeNotasEAlunos[0][3]}, sua média é ${listaDeNotasEAlunos[1][2]}`);

/*EXPLICAÇÃO DESSE CONSOLE.LOG: 
a primeira listaDeNotasEAlunos recebe dois colchetes de índice, sendo o primeiro colchete perguntando qual índice da Let listaDeNotasEAlunos eu quero 
acessar, sendo o índice 0 a lista de Alunos e o índice 1 a lista de notas, ai no nosso caso selecionamos primeiro a lista de Alunos, mas podemos começar
por qualquer ordem. E o segundo colchete perguntando qual elemento da lista de alunos queremos selecionar, isso através dos indices da lista, começando 
do 0, no caso selecionamos o índice 3 que se refere ao último elemento da nossa lista de alunos que á Ana.

e a segunda listaDeNotasEAlunos recebe também dois colchetes de índice: perguntando também as mesmas coisas: sendo o primeiro colchete perguntando qual 
índice da Let listaDeNotasEAlunos eu quero acessar, sendo o sendo o índice 0 a lista de Alunos e o índice 1 a lista de notas, ai no nosso caso selecionamos
a lista de notas através do índice 1,  mas podemos começar por qualquer ordem. E o segundo colchete perguntando qual elemento da lista de notas queremos
selecionar, isso através dos indices da lista, começando do 0, no caso selecionamos o índice 2 que se refere ao terceiro elemento da nossa lista de notas 
que é o 9.
*/
console.table(listaDeNotasEAlunos);