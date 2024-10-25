// Função para verificar as letras 'a' na string
function verificarLetraA(str) {
    const minuscula = (str.match(/a/g) || []).length; // Conta 'a'
    const maiuscula = (str.match(/A/g) || []).length; // Conta 'A'
    const total = minuscula + maiuscula; // Total

    console.log(`A letra 'a' minúscula ocorre ${minuscula} vez(es).`);
    console.log(`A letra 'A' maiúscula ocorre ${maiuscula} vez(es).`);
    console.log(`Total de ocorrências da letra 'a': ${total} vez(es).`);
}

// Pergunta ao usuário
const input = prompt('Digite uma string para verificar a letra "a":');
verificarLetraA(input);
