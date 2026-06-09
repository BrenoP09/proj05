const salario = Number(prompt("Digite o seu salário:"));
const valorParcela = Number(prompt("Digite o valor da parcela desejada:"));

const limiteParcela = salario * 0.30;

if (valorParcela > limiteParcela) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}