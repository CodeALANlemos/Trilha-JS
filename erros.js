const numero = 8 ; /* se colocarmos o const sem o seu número/string, ele vai gerar um SyntaxError: Missing initializer in const declarition, que nada mais é
dizendo que falta o inicializador, que pode ser um número ou string.*/

/* console.log(numero  // se colocarmos desta forma ira aparecer o seguinte erro: SyntaxError: missin ) after argument list, ou seja: está faltando o 
fechamento do parênteses depois da lista de argumentos. Ai teriámos que colocar da forma correta: */
console.log(numero);

console.log(minhaVar); /* se colocarmos para rodar uma var que não foi delcarada vai aparecer o seguinte erro: ReferenceError: minhaVar is not Defined
dizendo que está var não foi declarada no nosso código.*/

/*Outro erro: RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode
ser feito com números inteiros maiores ou iguais a zero, mas acaba recebendo -1 por exemplo.*/ 
/*
Interessante: Esse monte de texto nada mais é do que o stacktrace ou Pilha: Essa parte é muito importante para nós quando estamos trabalhando com vários tipos de
módulos ou em bibliotecas, e, também, quando temos mais de um arquivo trabalhando, quando nosso código faz parte
de mais de um arquivo, ele é separado em vários arquivos separados, vários tipos diferentes.
No caso, essa lista que está sendo passada para nós, no terminal, é chamada stacktrace, onde o JavaScript nos mostra todo o caminho que nosso código 
executou e todos os arquivos internos da ferramenta, da biblioteca, da linguagem de programação, que estão sendo usados para fazer com que nosso código 
funcione. E ele pode nos ajudar a descobrir onde está acontecendo, ou onde está "estourando" um erro, um bug que, às vezes, é mais difícil identificar 
em um código maior.

at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
at Function.Module._load (node:internal/modules/cjs/loader:778:27)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47 {
code: 'MODULE_NOT_FOUND',
requireStack: [] */