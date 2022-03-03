/// <reference types="cypress" />

import loc from '../../support/locators'

describe('work with alert', () => {

    before(() => {
       cy.login('a@a', 'a');
       cy.resetApp()
    })

    it('deve criar uma conta', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('conta meme')
        cy.wait(1000)
        cy.get(loc.CONTAS.BTN_SALVAR).click();
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });

    it('deve alterar uma conta', () => {
        //cy.get(':nth-child(8) > :nth-child(2) > .fa-edit').click()
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
        .clear()
        .type('conta meme1')
        cy.get(loc.CONTAS.BTN_SALVAR).click();
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    });
})