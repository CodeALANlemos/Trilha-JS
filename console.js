/*O console é uma ferramenta que tem tanto no Node, que estamos usando, quanto nos navegadores e usamos ele para colocar frases para fora, os dados,
de uma forma geral, para fora da nossa aplicação. De uma forma que não apareça, diretamente, para o nosso usuário, mas, ele tem acesso, caso ele precise.

No caso, estamos usando sempre o console.log. O que é esse “log”, no final? É um registro. Estamos criando um registro no nosso console e podemos colocar 
qualquer informação dentro desse registro, podendo ser um número, uma string, uma variável, o que quisermos.

O consol.error faz o mesmo papel do console.log que é para inserir dados fora da nossa aplicação, só que alertando mensagem de erro. 

É sempre uma boa prática nós utilizarmos o console, tanto quanto log quanto error, para sair da nossa aplicação, para sempre sabermos o que está acontecendo
dentro dela. Já que se ela, simplesmente, entra, executa e sai, nós não sabemos se teve algum problema no meio. Ás vezes, uma conta entra um dado errado,
então, é sempre bom termos esse feedback da aplicação, para sabermos o que está acontecendo.
*/

// tipos de console.alguma coisa:

/*
console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.*/

// DOCUMENTAÇÃO DO NODE.JS: https://nodejs.org/api/console.html

/*Para ficar em Mente: 
console.error(new Error("deu erro"));
a parte de baixo é oa resposta do terminal do node.

deu erro
Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47*/