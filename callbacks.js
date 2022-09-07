const nomes = ["Ana","Juliana","Leo","Paulinho O Loko"];
// esta é outra forma na qual pode ser utilizado o forEach, declarando a função fora do forEach.

// LEMBRANDO que é OBRIGATÓRIO TER UM BLOCO DE FUNÇÃO DENTRO DO forEach.
nomes.forEach(ImprimeNomes);

function ImprimeNomes(nome) {
    console.log(nome);
}

