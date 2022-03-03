/// <reference types="cypress" />

import loc from '../../support/locators'

describe('work with alert', () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('a@a');
        cy.get(loc.LOGIN.PASSWORD).type('a')
        cy.get(loc.LOGIN.BTN_LOGIN).click();
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })

    it('deve criar uma conta', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('conta meme')
        cy.get(loc.CONTAS.BTN_SALVAR).click();
        cy.get(LOC.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });

    it.only('deve alterar uma conta', () => {
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