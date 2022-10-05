const cliente = 
  { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"],
    dependentes: [
        { 
          nome: "Tiringa",
          parentesco: "Tio",
          dataNasc: "20/03/1960", 
          apelido: "Cu de gambá" },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'},
        {
            nome: 'Paulinho',
            parentesco: 'Primo',
            dataNasc: '30/12/1998'
        }

    ],
    saldo:100,
    depositar:function(valor) { 
        this.saldo += valor 
    }   
}

function oferecerSeguro(obj) {
    const propriedadesClientes = Object.keys(cliente); //o Object.keys, ele vai criar na verdade um array com as chaves de um objeto, nosso caso é cliente.
    if(propriedadesClientes.includes("dependentes")) { /*o método .includes verifica se o valor que você passar para ele existe dentro da array, retornando
    true ou false.*/ console.log(`Oferta de seguro de vida para: ${obj.nome}`)/* obj vai retornar todo o objeto e o .nome vai filtra para retornar somente 
    a chave nome do objeto cliente.*/

    }
}

oferecerSeguro(cliente); // aqui é onde o parâmetro da função oferecerSeguro que é o obj pega o parâmetro da chamada da função e faz o paranauê.