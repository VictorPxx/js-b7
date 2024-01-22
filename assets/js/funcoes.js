/* EXERCÍCIO 1
Calcule a porcentagem entre 2 números
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
*/

function calcPct(x, y) {
    return (y / x) * 100;
}

let x = 50;
let y = 10
let pct = calcPct(x, y);

console.log (`${pct}% de ${x} é ${y}`);


/* EXERCÍCIO 2
Calcule o preço do imóvel
- m2 = 3000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

/* COMO EU FIZ!
function calcularImovel(metragem, quartos) {
    let m2 = 3000
    if(quartos == 1) {
        valor = metragem * 1;
        return valor * m2;
    } else if (quartos == 2){
        valor = metragem * 1.2;
        return valor * m2;
    } else if (quartos == 3) {
        valor = metragem * 1.5;
        return valor * m2;
    } else {
        return "Não existe essa opção!"
    }
}

let metragem = 100;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`); */

//COMO BONIEKY FEZ!
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;

        case 2:
            preco = metragem * (m2 * 1.2);
            break;

        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);



/* EXERCÍCIO 3
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

/* 
Como eu fiz!
function validar (usuario, senha) {
    let validacao = usuario === 'pedro' && senha === '123';

    if(validacao){
        console.log('Acesso concedido.')
    } else {
        console.log('Acesso NEGADO!')
    }
    return validacao;
}

let usuario = 'pedro';
let senha = '1234';
let validacao = validar(usuario, senha); */

//Como Bonieky fez!
function validar(usuario, senha){
    if(usuario === 'pedro' && senha === '123'){
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = '1234';
let validacao = validar(usuario, senha);
if(validacao){
    console.log('Acesso concedido.')
} else {
    console.log('Acesso NEGADO!')
}

/*PENSADO POR MIM, PARA EXERCITAR A LÓGICA.

function calculadora(x, y, sinal){
    if(sinal === '+'){
        return x + y;
    }
    if(sinal === '-'){
        return x - y;
    }
    if(sinal === '*'){
        return x * y;
    }
    if(sinal === '/'){
        return x / y;
    }
}

let xString = prompt('Digite o primeiro número');
let sinal = prompt('Digite o sinal(+, -, *, /) da espressão');
let yString = prompt('Digite o segundo número');
let x = parseInt(xString);
let y = parseInt(yString);

let calc = calculadora(x, y, sinal);

alert(`Resultado de ${x} + ${y} é ${calc}`);
*/