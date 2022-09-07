const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Juão'];
const notas = [7, 4.5, 8, 7.5, 1.5];

                                           // DESAFIO PARA VER VER QUEM FOI REPROVADO.

//O método filter pode receber até três parametros
//o Segundo (opcional) é o indice, ele é quem representada cada item do array
//por ultimo o Terceiro, que é o o proprio array sendo percorrido, TAMBÉM OPCIONAL
//o filter trabalha com valores booleanos = true or false.
// filter nescessita de um callback, ou seja: uma função.

const reprovados = nomes.filter((alunos, indice) => notas[indice] < 5); // o parâmetro indice está representando o elemento de cada indice do array notas.
console.log(`Reprovados: ${reprovados}`);
