// tipos de funções: 

// declaração de função

function minhaFuncao(num1, num2) {
    return num1 + num2;
}

console.log(minhaFuncao(100, 100));

// expressão de função

const soma = function(num1,num2) {return num1 + num2}

console.log(soma(45, 45));

// diferença principal: HOISTING.

/*Se tentarmos chamar uma função antes da declaração usando a function padrão ele ainda funciona, só que se for tentar chamar a expressão de função
antes dela ser declarada vai dar um erro dizendo: ReferenceError: Cannot access 'soma' before initialization, pelo motivo de que a expressão de função é 
criada com const e como já sabemos, const não pode ser iniciada antes de ser declarada.*/

console.log(apresentar());

function apresentar() {
    return "olá";
}