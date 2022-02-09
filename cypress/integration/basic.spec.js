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
    it.only('Should find and interact with and element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });
    //lembrar que cypress tem o botão de inspecionar e gerar o get e contains do elemento na UI dele.
})