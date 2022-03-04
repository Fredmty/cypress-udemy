const locators = {
    LOGIN : {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU : {
        SETTINGS: '[data-test=menu-settings',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]'
    },
    CONTAS : {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(., 'conta de teste')]/..//i[@class='far fa-edit']"
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        BTN_SALVAR_MOVIMENTACAO: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        BUSCA: ':nth-child(7) > .row > .col-12 > :nth-child(1) > small'
    },
    MESSAGE: '.toast-message'
}

export default locators;