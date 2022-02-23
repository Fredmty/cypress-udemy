/// <reference types="cypress" />

describe('fixture teste', () => { 
it('pegar informaçẽos do arquivo fixture', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#formNome').type();
    cy.get('formSobrenome');
    cy.get('#formSexoMasc');
    cy.get('#formnComidaCarne');
});
})