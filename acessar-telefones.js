const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"]
}

cliente.fones.forEach(fone => console.log(fone)); /*Fizemos este arrow function para retornar o valor de fones, supunhetamos que no cadastro da pessoa
tenha mais de 1 telefone, ai ele é declarado do mesmo jeito onde está escrito "fones" dentro do objeto cliente, e depois se quisermos retornar somente o 
valor, podemos usar a função forEach, que vai simplesmente fazer um loop e para cada fone, para cada item, cada índice do nosso array que estamos chamando
de fone, só fizemos aqui um console.log() para exibir no nosso terminal quando executássemos o arquivo. */