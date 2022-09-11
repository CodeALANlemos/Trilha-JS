const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"],
    dependentes: [{ // nesta linha está sendo declarada como uma lista de dependentes.
        nome: "Tiringa",
        parentesco: "Parceiro",
        dataNasc: "20/03/1960", 
        apelido: "Cu de gambá"
    }]   
}

cliente.dependentes.push({ // uma forma de adicionar mais dependentes.
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014"); /*então eu criei uma nova const, chamada filha mais 
nova que vai filtrar, ele está no objeto cliente, dentro do objeto cliente vou percorrer a lista de objetos chamada dependentes, filtrei pela data de 
nascimento, isso vai me retornar uma posição do array, o filter é um método de array que sempre vai retornar o que ele filtra dentro de um novo array, 
mesmo se ele não encontrar nada, ele vai retornar um array vazio. Então como é um array eu vou passar a posição dele, então eu vou colocar na posição 
zero[0], a posição zero eu vou acessar, por exemplo, o nome.
*/

console.log(filhaMaisNova[0].nome); /*colocamos o indice 0 para acessar o primeiro indice da array e nome para trazer somente o nome do infeliz, Em resumo,
mesmo sendo apenas 1 objeto que é a lista de dependentes, ainda sim ele recebe o indice [0] e precisa ser chamado se voce digitar apenas 
"filhaMaisNova.nome" ele te retorna a imagem undefined.


Então o que que o André fez foi entrar no objeto cliente, entrar na chave dependentes, e através do método filter que é um método de array do JavaScript, 
que ele filtra dados de acordo com o que passamos dentro da nossa arrow function, o André pediu para filtrar alguma coisa, o que ele está pedindo para 
filtrar? Ele está pedindo para cada dependente que o filtro percorre, ele faz aquele loop, ele está acessando a chave de cada um dos objetos.

Então conseguimos entrar na array, cada índice da array é o seu próprio objeto, e o filtro consegue acessar esse objeto através da notação de ponto, aqui 
dependente ponto data de nascimento, ele vai acessar a chave data de nascimento de cada um dos índices da array que já colocamos aqui no parâmetro estamos
chamando de dependente, e comparar se o valor da string for 04/01/2014 ele retorna o dado, senão, ele passa reto.

Isso significa que se dermos um console.log(filhaMaisNova) aqui em filha mais nova somente, ele deve trazer um array com o conteúdo do objeto que tem o
nome de Samia Maria, vou rodar mais uma vez novamente, e é isso mesmo, ele traz um array com somente o que ele encontrou, onde a comparação de data de 
nascimento igual 04/01/2014 foi true e trouxe o objeto inteiro.

Conseguimos acessar o nome porque usamos aqui os colchetes, agora esses colchetes que usamos é para acessar um índice de uma array, o índice zero, que é o 
único elemento que temos no array, acessamos e conseguimos entrar no objeto e acessar a propriedade nome.

Então sempre lembrar que quando acessamos propriedades de objetos, e elas são outros objetos, conseguimos continuar digamos assim, entrando níveis abaixo,
níveis a dentro e acessando com a notação de ponto, e a mesma coisa se cada um dos objetos for um índice de um array.

Com os métodos de array conseguimos percorrer e cada um desses objetos conseguimos acessar o que tem dentro deles através da notação de ponto aqui passando
a chave que queremos, então acesso data de nascimento, acesso o nome, a partir do momento que conseguimos entrar no array e pegar cada um dos objetos que 
está na lista.

*/
