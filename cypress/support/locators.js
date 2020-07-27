const locators = {
    login: {
        email: "[data-test=email]",
        senha: "[data-test=passwd]",
        btnConfirm: ".btn"
    },
    mensagem: ".toast-message",
    menu: {
        config: "[data-test=menu-settings]",
        contas: "[href='/contas']",
        movimentacao: "[data-test=menu-movimentacao]"
    },
    contas: {
        nome: "[data-test=nome]",
        btnConfirm: ".btn"
    },
    movimentacao: {
        dataTransacao: "[data-test=data-transacao]",
        dataPagamento: "[data-test=data-pagamento]",
        descricao: "[data-test=descricao]",
        valor: "[data-test=valor]",
        interessado: "[data-test=envolvido]",
        btnReceita: "[data-test=tipo-receita]",
        btnDespesa: "[data-test=tipo-despesa]",
        btnConfirm: ".btn-primary",
        btnStatus: "[data-test=status]",
        conta: "[data-test=conta]"
    }
};

export default locators;