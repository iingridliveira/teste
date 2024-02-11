//5) Escreva um programa que inverta os caracteres de um string.
import readlineSync from 'readline-sync'
let palavra = readlineSync.question("Digite uma palavra ou frase: ");
function inverterPalavra(palavra) {
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

let palavraInvertida = inverterPalavra(palavra );
console.log(palavraInvertida);
