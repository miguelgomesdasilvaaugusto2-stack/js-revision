// 1
const valorCompra = +prompt('Digite o valor da compra:');
const clienteVip = true;
const formaPagamento = prompt('Digite a forma de pagamento:');

if (valorCompra <= 0) {
    console.log('Erro: Valor de compra inválido.');
}
else if (valorCompra < 100 || clienteVip == true) {
    console.log('Frete padrão: R$ 20,00.');
}
else if (valorCompra <= 299.99) {
    console.log('Benefício aplicado: Frete Grátis!');
}
else {
    console.log('Benefício aplicado: Frete Grátis + 10% de desconto!');
}

switch (formaPagamento) {
    case 'pix':
        console.log('Gerando QR Code com aprovação instantânea...');
        break;

    case 'credito':
    case 'debito':
        console.log('Conectando à operadora de cartão...');
        break;

    case 'boleto':
        console.log('Gerando linha digitável com vencimento em 3 dias úteis...');
        break;

    default:
        console.log('Erro: Forma de pagamento não aceita.');
        break;
}


// 2
const categoriaChamando = prompt('Digite a sua categoria de chamado:');
const prejuizoEstimado = +prompt('Digite o prejuízo estimado:');
const clienteEnterprise = true;

switch (categoriaChamando) {
    case 'financeiro':
        console.log('Direcionando ticket para a equipe de Faturamento e Cobrança.');
        break;

    case 'bug':
        console.log('Direcionando ticket para a Engenharia de Software (Nível 2).');
        break;

    case 'acesso':
    case 'duvida':
        console.log('Direcionando ticket para o Atendimento Geral (Nível 1).');
        break;

    default:
        console.log('Erro: Categoria de chamado inválida.');
        break;
}

if (prejuizoEstimado < 0) {
    console.log('Erro: Valor de prejuízo inválido.');
}
else if (prejuizoEstimado >= 10000 || clienteEnterprise != true) {
    console.log('Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora).');
}
else if (prejuizoEstimado >= 1000 && prejuizoEstimado <= 9999.99 || clienteEnterprise == false) {
    console.log('Prioridade ALTA: Atendimento em até 4 horas.');
}
else {
    console.log('Prioridade NORMAL: Atendimento em até 24 horas.');
}