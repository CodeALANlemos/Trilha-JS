const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"],
    dependentes: [
        { 
          nome: "Tiringa",
          parentesco: "Parceiro",
          dataNasc: "20/03/1960", 
          apelido: "Cu de gambá" },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo:100,
    depositar:function(valor) { 
        this.saldo += valor 
    }   
}

let relatorio=""; // ela vai ser mudada dentro do for in, por isso começou zerada.

for ( let info in cliente) { /*Lembra a estrutura for de repetição, é bem similar a esta, foi criada a let info que representa cada informação que vai ser 
acessada de algum objeto que no nosso caso é o objeto cliente, ou seja: as chaves das propriedades do objeto cliente que são: nome,idade,cpf,email e etc...
E o in é o método de parada, que nós definimos como cliente, ou seja: é para pegar somente as info do objeto cliente.*/
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    }else {
        relatorio += `
        ${info} ==> ${cliente[info]} 
        ` /* se colocarmos somente o info vai aparecer só as chaves das propriedades do objeto cliente, que são o nome, idade, cpf...
          e quando colocamos o cliente combado com a info, vai aparecer o valor da propridade daquela chave. E usamos a notação de colchetes, lembra lá 
          anteriormente que vimos que a notação de colchetes elas servem para passarmos chaves de um objeto quando não temos como escrever aqui 
          diretamente, porque não temos como escrever aqui .nome, depois .email, porque esse objeto ele vai ser percorrido automaticamente pelo for, então 
          passamos isso como variável usando a notação de colchetes */
    }

    /*criamos um if para aparecer as informações de forma correta, o typeof é uma palavra-chave que usamos no JavaScript para que o JavaScript nos diga 
    qual que é o tipo de dado, ou seja, o tipo de dado de uma função ela vai retornar function, se pedirmos o typeof de um tipo de dado do que é uma 
    string, ele tem que nos retorna string, então conseguimos fazer algumas verificações e validações, usando essa palavra-chave typeof. E estamos usando
    o typeOf para nos informar qual é o tipo de dado do cliente, e o e usamos o if para verificar se  tipo de dado do cliente for igual a uma function ou 
    object, passe reto e não faça nada, agora se não for nada disso, imprima o relatório.
    */
}

console.log(relatorio);
