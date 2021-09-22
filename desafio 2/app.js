const number = parseInt(prompt('Informe quantos termos deseja da sequência: '));
let n1 = 0;
let n2 = 1;
let proximo;

console.log('Sequência de Fibonacci:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
}