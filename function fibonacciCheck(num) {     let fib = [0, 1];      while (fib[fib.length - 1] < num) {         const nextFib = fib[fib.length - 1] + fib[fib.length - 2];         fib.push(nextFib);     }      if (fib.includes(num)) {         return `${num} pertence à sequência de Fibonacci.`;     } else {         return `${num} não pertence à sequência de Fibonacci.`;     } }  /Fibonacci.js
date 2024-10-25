function fibonacciCheck(num) {
    let fib = [0, 1];

    while (fib[fib.length - 1] < num) {
        const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextFib);
    }

    if (fib.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

// Pergunta ao usuário
const input = prompt('Digite um número para verificar se pertence à sequência de Fibonacci:');
const inputNumber = parseInt(input, 10);

if (isNaN(inputNumber)) {
    console.log('Por favor, digite um número válido.');
} else {
    console.log(fibonacciCheck(inputNumber));
}
