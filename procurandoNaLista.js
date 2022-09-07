const alunos = [`João`, `Juliana`, `Caio`, `Ana`, `Alan`];

const mediasDosAlunos = [8, 7, 9, 6, 10];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]; // lista de duas dimensões.

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ',sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "O aluno " + nomeDoAluno + " não cadastrado.";
    }
} 

/*
EXPLICAÇÃO: estamos usando um arrow function com o parâmetro(nomoDoAluno) e é criado o if para saber se existe o aluno e a nota dele dentro da lista: e 
ela começa com o listaDeNotasEAlunos[0] para retornar a const alunos e .includes que serve para verificar de fato se  o que colocarmos no parâmetro da 
função quando o chamamos existe dentro da const alunos, ai se for verdade/estiver dentro da const alunos, ela vai continuar o processo que eu vou explicar
logo abaixo.
CONTINUAÇÃO: foi criado a variavel indice que só é disponível dentro da função, caso tentar mexer nela fora da função vai dar erro. Continuando: a variável 
indice recebe = listaDeNotasEAlunos[0] para retornar a const alunos com o .indexOf recebendo o parâmetro(nomeDoAluno) e o indexOf vai procurar o indice do 
parâmetro que foi passado para ele quando a função é chamada. EXEMPLO: console.log(exibeNomeNota('Juliana')); O que vai acontecer é que o indexOf ele vai 
procurar o indice de Caio, no caso é o indice 2.

E depois de tudo isso vem o return retornando: listaDeNotasEAlunos[0][indice], ou seja ele está nos retornando a nossa lista de alunos atrelando a ela a 
nossa variavel indice, que no exemplo acima foi o Caio com o indice 2 na nossa lista de alunos, e depois disso é retornado: listaDeNotasEAlunos[1][indice];
que agora está nos retornando: a nossa variavel = mediaDosAlunos, atrelando a ela a variavel indice: que no nosso caso é o indice 2, pois no exemplo acima 
escolhemos o Caio da nossa lista de alunos, sendo assim Como o Caio é o indice 2, ele foi concedido a nota 9, pois o indice 2 na variavel de médiaDosAlunos 
é a nota 9. Sendo assim, se o Caio tem o indice de número 2, o return vai ver na variavel mediaDosAlunos que nota está atrelada ao indice 2 e atrelando a o 
Caio, parecendo com o jogo deligar os pontos. 

*/
console.log(exibeNomeNota('Alan'));
