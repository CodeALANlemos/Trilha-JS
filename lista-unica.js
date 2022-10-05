const clientes = [
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
          dataNasc: "20/03/1960"},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ]
  }, 
  {
    nome: "Toguro",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com",
    fones: ["(54)378020254", "(89)994023793"],
    dependentes: [
        {
            nome: 'Sayuri',
            parentesco: 'Irmâ',
            dataNasc: '14/08/2000'},
        {
            nome: 'Paulinho',
            parentesco: 'Primo',
            dataNasc: '30/12/1998'
        }
    ]
  }
]

let listaDependentes = []; // aqui a variavel tem que começar vazia pois vai ser incrementada na repetição.
for(let i = 0; i < clientes.length; i++) {
    listaDependentes.push(...clientes[i].dependentes); // faz a mesma coisa que o método de const, só que aqui tem a vantagem da repetição.
    //o ponto.push vai adicionar mais uma lista de dependentes até com que a let i que é a contadora seja superior ou igual a clientes.length.
}

console.table(listaDependentes);

/*Acima na lista cliente foi criado uma lista com duas pessoas diferentes e seus dependentes diferentes também.*/

/*const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]; esta variável vai servir para extrair somente a lista de dependentes 
do nosso objeto clientes, e esses três pontos é o "spreadoperator que vai 'espalhar' a nossa lista de depentes, e o clientes[0].dependentes é para extrair
a lista de clientes do indice 0 que é a do Alan e seus dependentes, e a com índice 2 é para a lista do Toguro e seus dependentes."

O SPREADOPERATOR VAI JUNTAR AS DUAS LISTA TORNANDO UMA COISA SÓ.

ALURA+ SOBRE O SPREADOPERATOR/DESTRUCTURING: https://www.youtube.com/watch?v=f8a-qwKC5yk
*/






