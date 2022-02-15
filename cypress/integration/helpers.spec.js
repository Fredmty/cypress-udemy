/// <reference types="cypress"/>

// wrap - encapsula os objetos com cypress
describe('Helpers', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //cy.get('#formNome').then($el => {
          //  cy.wrap($el).type('funciona via cypress')
        //});

        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(10)
            }, 500);
        })
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'));
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'));
    });

    it('Its', () => {
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'Usuario', idade:20, endereço: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereço').should('have.property', 'rua')
       //cy.wrap(obj2).its('endereço').its('rua').should('contain', 'bobos') //ruim
       cy.wrap(obj2).its('endereço.rua').should('contain', 'bobos') //bom

       cy.visit('https://www.wcaquino.me/cypress/componentes.html')
       cy.title().its('length').should('be.equal', 20)
    });

    it('Invoke', () => {
        const getValue = () => 1;
        const soma = (a,b) => a + b

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke');
        cy.window().invoke('alert', 'ola pingoou')
        cy.get('#resultado')
        .invoke('html', '<input type ="button", value="hacked"/>')
        })
    });
