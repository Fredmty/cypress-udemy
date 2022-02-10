/// <reference types="cypress"/>
//codigo html do body, que procura um texto em especifico dentro do body
//problema: texto solto demais, pode ser uma solução muito genérica

describe('trabalho com elementos html basicos', () => {
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('facilAchar').should('contain', 'Cuidado')
        cy.get('facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
})