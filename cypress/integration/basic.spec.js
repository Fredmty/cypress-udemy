/// <reference types="cypress"/>

describe('Cypress basic', () => {
    it('should visit a page and assert a title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //const title = cy.title();

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
                .should('be.equal','Campo de Treinamento')
                .should('contain', 'Campo')
                .and('contain', 'Campo')
        
        //TODO imprimir o log no console
        //TODO escrever o title em um campo de teste
    })
})