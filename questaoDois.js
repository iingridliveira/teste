//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
//sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência
// de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
import readlineSync from 'readline-sync'

function pertenceFibonacci(numero) {
    const raiz1 = Math.sqrt(5 * numero * numero + 4);
    const raiz2 = Math.sqrt(5 * numero * numero - 4);

    return Number.isInteger(raiz1) || Number.isInteger(raiz2);
}
let numero = Number(readlineSync.question("Digite um numero: "));

    if (pertenceFibonacci(numero)) {
        console.log(`${numero} pertence à série de Fibonacci`);
    } else {
        console.log(`${numero} não pertence à série de Fibonacci`);
    }

