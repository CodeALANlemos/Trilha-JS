const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach é uma função que chama outra função, então no argumento dela ela precisa de um bloco de outra função
notas.forEach(nota => {
    somaDasNotas += nota; // não é necessário o notas[i], pois como nós colocamos o parâmetro nota, o forEach interpreta automaticamente que cada nota no 
    //parâmetro da função é 1 indice dentro da lista de notas.
})

// outro método só que com o bloco de função convencional.
notas.forEach(function(nota){
    somaDasNotas += nota;
})

let mediaNotas = somaDasNotas/notas.length;

console.log(media);