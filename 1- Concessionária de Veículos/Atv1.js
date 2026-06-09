const valorCarro = Number(prompt("Digite o valor do carro:"));
const formaPagamento = prompt("Escolha a forma de pagamento:\n1 - À vista no PIX\n2 - Cartão de Crédito\n3 - Financiamento");

if (formaPagamento === "1") {
    const valorFinal = valorCarro * 0.85;
    alert(`Pagamento à vista no PIX.\nValor final com 15% de desconto: R$ ${valorFinal.toFixed(2)}`);
} else if (formaPagamento === "2") {
    const parcelas = Number(prompt("Digite a quantidade de parcelas (até 24x):"));
    const valorFinal = valorCarro * 1.05;
    const valorParcela = valorFinal / parcelas;
    alert(`Pagamento no Cartão em ${parcelas}x.\nValor total com juros: R$ ${valorFinal.toFixed(2)}\nValor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
} else if (formaPagamento === "3") {
    const parcelas = Number(prompt("Digite a quantidade de parcelas (até 48x):"));
    const valorFinal = valorCarro * 1.20;
    const valorParcela = valorFinal / parcelas;
    alert(`Pagamento por Financiamento em ${parcelas}x.\nValor total com juros: R$ ${valorFinal.toFixed(2)}\nValor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
} else {
    alert("Opção inválida.");
}