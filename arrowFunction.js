// function padrão

function apresentarPadrao(nome) {
    return `meu nome é ${nome}`
}

function somaPadrao(num1, num2) {
    return num1, num2;
}

function somaNumerosPequenosPadrao(num1, num2) {
    if (num1 > 20 || num2 > 10) {
        return "somente número de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// arrowFunction

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}