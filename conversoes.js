// tipo de dado
// booleanos

// conversão implícita.
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString)/*; vai dar false porque elas não são a mesma coisa, apesar de terem o mesmo caracter, eles representam tipos de 
diferentes, mas se colocar na comparação só ==, ele só vai comparar somente os valores/caracteres, retornando true.*/

console.log(numero + numeroString); // aqui ele vai concatenar as duas variáveis, porque uma é number e outra string , dando: 456456.

//FUNÇÕES QUE CONVERTER TANTO PARSTRING OU PARA NUMBER.

//Number(); Transforma uma string em number
//String(); Transforma um number em uma string.
console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString); // estas funçoes podem ser aplicadas também diretamente nas variáveis: const numeroString = Number("456");

// conversão explícita.

