/// <reference types="cypress" />

describe('work with alert', () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('a@a');
        cy.get('[data-test="passwd"]').type('a')
        cy.get('.btn').click();
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('deve criar uma conta', () => {
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('conta meme')
        cy.get('.btn').click();
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')

    });
})