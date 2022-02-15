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

    it('Deve fazer retry', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        //.should('not.exist')
        .should('exist')
        .type('funciona')
    });

    it('Uso do find', () => {
        cy.get('#buttonList').click();
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')

        cy.get('#lista li span')
        .should('contain', 'Item 2')
    });

    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click();
        //cy.get('#novoCampo', {timeout:1000}).should('exist');

        cy.get('#buttonListDOM').click();
        //cy.wait(5000) força a aplicação a parar por 5 segundos, não é sempre razoável fazer esse tipo de teste
        cy.get('#lista li span', {timeout:30000}) //desse modo, ele pode esperar essa request por ATÉ 30 segundos, mas caso retorne antes, já resume a resp
        //.should('contain', 'Item 2')
        .should('have.length', 1);
        cy.get('#lista li span')
        .should('have.length', 2);

    });


})