const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0; /* ela tem que ser declarada fora da estrutura de repetição, porque toda vez que a estrutura de repetição passar pelo o let, ele não
vai retornar ao seu valor de zero e não vai guardar nenhum valor.*/


for(let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]; // o += é uma forma mais enxuta de somaDasNotas = somaDasNotas + notas[i];
    /* o somaDasNotas que vale 0, vai pegar o indice 0 por exemplo que corresponde ao elemento 10 da lista de notas e somar um depois do outro, através da
     repetição do for. Por exemplo 0 equivale ao 10 ai a variável somaDasNotas vai guardar este valor e depois o for vai perguntar de novo se o i é menor 
     que o notas.lenght, e vai ver que é, sendo assim vai chegar no próximo indice que é o 1 com o valor de 6.5 e somaDasNotas vai pegar o primeiro valor
     que ela tinha guardado e somar com o próximo que ela acabou de pegar, assim suscessivamente até que o i seje < que o tamanho da lista notas.
     */
}

let mediaNotas = somaDasNotas / notas.length // aqui a let mediaNotas vai pegar a somaDasNotas e vai dividir pelo tamanho da nossa lista de notas.

console.log(mediaNotas)