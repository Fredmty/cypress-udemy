/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('work with alert', () => {

    before(() => {
       cy.login('a@a', 'a');
       cy.resetApp()
    })

    it('deve criar uma conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });

    it('deve alterar uma conta', () => {
        //cy.get(':nth-child(8) > :nth-child(2) > .fa-edit').click()
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
        .clear()
        .type('conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click();
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    });

    it('não deve criar uma conta com o mesmo nome', () => {
        cy.acessarMenuConta()
        cy.get(loc.CONTAS.NOME).type('Conta para alterar');
        cy.get(loc.CONTAS.BTN_SALVAR).click();
        cy.get(loc.MESSAGE).should('contain', 'code 400');
    });


    it('Deve criar uma transação', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR_MOVIMENTACAO).click()
    })

    it('Deve pegar o saldo', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')

        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        //cy.wait(1000)
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')

        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR_MOVIMENTACAO).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.MENU.HOME).click()
        

    })

    it('Deve remover uma transação', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
    })
})