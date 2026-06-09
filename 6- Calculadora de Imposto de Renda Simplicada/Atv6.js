const salarioBruto = Number(prompt("Digite o salário bruto mensal:"));
let imposto = 0;

if (salarioBruto <= 2112.00) {
    imposto = 0;
} else if (salarioBruto <= 2826.65) {
    imposto = salarioBruto * 0.075;
} else if (salarioBruto <= 3751.05) {
    imposto = salarioBruto * 0.15;
} else {
    imposto = salarioBruto * 0.225;
}

const salarioLiquido = salarioBruto - imposto;

alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}\nImposto Descontado: R$ ${imposto.toFixed(2)}\nSalário Líquido Final: R$ ${salarioLiquido.toFixed(2)}`);