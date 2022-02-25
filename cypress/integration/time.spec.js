/// <reference types="cypress" />

describe('Testes Dinamicos', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('brincando com o tempo', () => {
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain', '25/02/2022');

        const dt = new Date(2022, 27, 10, 15, 23, 50)

        cy.clock()
        cy.clock(dt.getTime())
        //cy.get('#buttonNow').click();
        //cy.get('#resultado > span').should('contain', '25/02/2022');
    });
    it('vai para o futuro', () => {
        cy.get('#buttonTimePassed').click();
       // cy.get('#resultado > span').should('contain', '1645825011964');
        cy.get('#resultado > span').invoke('text').should('gt', 1987123987)

        cy.clock()
        cy.get('#buttonTimePassaed').click();
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(5000)
        cy.get('#buttonTimePassaed').click();
        cy.get('#resultado > span').invoke('text').should('lte', 5000)
    });
})