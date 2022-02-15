/// <reference types="cypress"/>
//pause e debug
//.debug() e cy.pause() antes da execução
describe('Cypress basic', () => {
    it.only('should visit a page and assert a title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        //const title = cy.title();

        cy.title().should('be.equal','Campo de Treinamento');
        cy.title().should('contain', 'Campo').debug();

        cy.title()
                .should('be.equal','Campo de Treinamento')
                .should('contain', 'Campo')
                .and('contain', 'Campo');
       // cy.title().debug()

        let syncTitle

       cy.title().then(title => {
           console.log(title);
           cy.get('#formNome').type(title);
           syncTitle = title
       })

       cy.get('[data-cy=dataSobrenome]').then($el => {
           $el.val(syncTitle)
       });

       cy.get('#elementosform\\:sugestoes').then($el => {
           cy.wrap($el).type(syncTitle)
       });
        //TODO imprimir o log no console --feito
        //TODO escrever o title em um campo de teste --feito
    })
    it('Should find and interact with and element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!');
    });
    //lembrar que cypress tem o botão de inspecionar e gerar o get e contains do elemento na UI dele.
})