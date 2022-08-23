const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
/* este método é pouco usual, pois ficar comcatenando um monte de Strings acaba ficando tudo meio embolado, e por isso existe o 
template string, que vai nos ajudar logo abaixo*/


// template string


const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`; /*Ao invés de fazer toda aquela concatenação
 horrorosa, se cria este sinais e colocamos as variáveis dentro deles. Obeserve que antes de tudo utilizado o sinal `` para fazer o template string.
 E também é possível fazer operações matemáticas dentro dela.*/ 

console.log(apresentacao)