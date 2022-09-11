const cliente = { 
    nome: "Alan",
    idade: 20,
    cpf: '690-365-390-09',
    email: "alura@gmail.com"
}

cliente.fone = "8243256346"; // uma forma de adicionar uma informarção ao objeto.

cliente.fone = "dçdçgkhasds"; // se chamarmos a mesma chave com valores diferentes o JS vai substituir o valor, pegando sempre o último valor atribuído.

console.log(cliente);

/*Já vimos o principal, que é acessar, alterar e adicionar valores em um objeto. Mas ainda faltou falarmos sobre um caso: E quando queremos deletar um
 conjunto de chave/valor?

Vamos considerar o objeto abaixo:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}
Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
Também é possível utilizar a notação de colchetes:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

Após remover as duas propriedades acima, o objeto agora está desta forma:

{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}
O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não 
retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true
O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. 
Vamos entender melhor o tema “heranças” mais adiante no curso.*/