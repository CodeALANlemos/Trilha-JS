/*

var altura = 5;
var comprimento = 7;

area = altura * comprimento; // não foi necessário declarar a variável area, ou seja: colocando var area = altura * comprimento ou fazer da seguinte maneira
area = altura * comprimento
var area;  // porque o node já faz isso automoaticamente,  mas é de boa prática declarar a variável.*/ 

// CONSIDERAÇÕES: VAR NÃO É MUITO UTILIZADA HOJE EM DIA POR SER MUITO SOLTA, VARIANDO MUITO.

/* 

============================================================


let forma = 'retângulo'
let altura = 5;
let comprimento  = 7;
let area;

area = altura * comprimento;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
*/

// a let se fizermos ela colocando embaixo de um bloco e ela vai dar um bug dizendo: Cannot access 'area' before initialization.
//diferente do var que pode ser colocada na parte de baixo, o let não pode estar depois de um bloco.


// CONSIDERAÇÕES: LET SEMPRE TEM QUE SER DECLARADA ANTES DE SER INICIALIZADA.

//============================================================


const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;
// const não pode ser feita da seguinte forma: const area; porque desse jeito nos indica que const vai receber outro valor lá na frente, então tem que ser 
// outro tipo de variável.


if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento / 2);
}

console.log(area);


// CONSIDERAÇÕES: CONST ELA TEM UM VALOR FIXO E TAMBÉM TEM QUE SER DECLARADA ANTES.

