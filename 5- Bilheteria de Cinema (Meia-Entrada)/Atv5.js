const idade = Number(prompt("Digite a sua idade:"));
const estudante = prompt("Você é estudante? (sim/nao)").toLowerCase();
let valorIngresso = 40;

if (idade < 12 || idade > 60 || estudante === "sim") {
    valorIngresso = 20;
}

alert(`Valor final do ingresso: R$ ${valorIngresso.toFixed(2)}`);