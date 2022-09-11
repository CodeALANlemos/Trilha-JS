const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"]
}

cliente.dependentes = { // criando um objeto dentro de outro.
    nome: "Tiringa",
    parentesco: "Parceiro",
    dataNasc: "20/03/1960", 
    apelido: "Cu de gambá"
}

/* outra forma forma de se obter o mesmo resultado acima:
const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"], 
    dependentes: [{
        nome: "Tiringa",
        parentesco: "Parceiro",
        dataNasc: "20/03/1960", 
        apelido: "Cu de gambá"
    }]
}
    
*/ 


cliente.dependentes.nome = "Vicente"; // mudando o valor da chave nome do objeto dependentes.

console.log(cliente);