// == (compração implicita)

const numero = 5;
const text = "5";

console.log(numero === text);/*vai retornar false porque os valores podem até ser iguais, mas o tipo da variável é diferente,se fosse só ==,ai retornar true.*/
// == só compara o valor;
// === compara o valor e o tipo de dado;

//typeof retorna o tipo de dado que a variável está armazenando.
console.log(typeof numero); 
console.log(typeof text);

// conversão explícita

Number();
String();