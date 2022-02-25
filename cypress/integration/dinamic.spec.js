/// <reference types="cypress" />

describe('Testes Dinamicos', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    const foods = ['carne', 'frango', 'pizza', 'vegetariano']
    foods.forEach(food => {

    it(`Cadastro comida ${food}` , () => {
        
        cy.get('#formNome').type('pepino')
        cy.get('#formSobrenome').type('pepino');
        cy.get(`[name=formSexo][value=F]`).click();
        cy.get(`[name=formComidaFavorita][value=${food}]`).click();
        cy.get('#formEscolaridade').select('Doutorado');
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click();
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
    });

    it('selecionar usando it', () => {
        cy.get('#formNome').type('pepino')
        cy.get('#formSobrenome').type('pepino');
        cy.get(`[name=formSexo][value=F]`).click();


        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() !== 'vegetariano')
                cy.wrap($el).click();
        });


        cy.get('#formEscolaridade').select('Doutorado');
        cy.get('#formEsportes').select('Corrida')
        //cy.get('#formCadastrar').click();
        //cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
        cy.clickalert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    });
})
})