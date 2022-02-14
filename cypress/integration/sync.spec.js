/// <reference types="cypress"/>

describe('Esperas', () =>  {
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() =>{
        //cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload(); //melhor usar desse jeito pra limpar a tela
    })
    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    });
})