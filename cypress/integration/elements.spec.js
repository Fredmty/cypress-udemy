/// <reference types="cypress"/>
//codigo html do body, que procura um texto em especifico dentro do body
//problema: texto solto demais, pode ser uma solução muito genérica
//# significa 'o elemento cujo id seja esse valor'
describe('trabalho com elementos html basicos', () => {
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() =>{
        //cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload(); //melhor usar desse jeito pra limpar a tela
    })
    it('Text', () => {
       
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        
        //cy.get('[href="a"]').click()
        //cy.get('#resultado').should('have.text', 'Voltou!')

        //cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

    it.only('CamposdeTextos', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')
        cy.get('#elementosForm\\:sugestoes')
        .type('Cypress Test')
        .should('have.value', 'Cypress Test')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('???')

        cy.get('[data-cy="dataSobrenome"]')
        .type('Teste12345{backspace}{backspace}')
        .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay:100})
        .should('have.value', 'acerto')

    });
})