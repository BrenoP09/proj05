let valorPedido = Number(prompt("Digite o valor do pedido:"));
let brinde = "Nenhum";

if (valorPedido > 50) {
    const temFidelidade = prompt("Você possui o Cartão Fidelidade? (sim/nao)").toLowerCase();
    if (temFidelidade === "sim") {
        valorPedido = valorPedido * 0.90;
    } else {
        brinde = "Cookie de brinde";
    }
}

alert(`Valor total a pagar: R$ ${valorPedido.toFixed(2)}\nBrinde: ${brinde}`);