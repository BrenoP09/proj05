const valorCompra = Number(prompt("Digite o valor da compra:"));
const regiao = prompt("Digite a região de entrega:\n1 - Sul\n2 - Sudeste\n3 - Outras");
let frete = 0;

if (valorCompra <= 250) {
    if (regiao === "2") {
        frete = 10;
    } else if (regiao === "1") {
        frete = 20;
    } else {
        frete = 30;
    }
}

const valorTotal = valorCompra + frete;
alert(`Valor da compra: R$ ${valorCompra.toFixed(2)}\nValor do frete: R$ ${frete.toFixed(2)}\nTotal a pagar: R$ ${valorTotal.toFixed(2)}`);