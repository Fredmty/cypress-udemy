/// <reference types="cypress" />

describe('locators', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload();
    })

    it('usando xpath', () => {
        cy.xpath('input[contains(@onclick, \'Francisco\')]')
    });
})