/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('work with alert', () => {

    before(() => {
      // cy.login('a@a', 'a');
       //cy.resetApp()
    })

    it('deve criar uma conta', () => {
       cy.request({
           method: 'POST',
           url: 'https://barrigarest.wcaquinome/signin',
           body: {
               email: "a@a",
               redirecionar: false,
               senha: "a"
           }
       }).its('body.token').should('not.be.empty')
    });

    it('deve alterar uma conta', () => {
        
    });

    it('não deve criar uma conta com o mesmo nome', () => {
        
    });


    it('Deve criar uma transação', () => {
       
    })

    it('Deve pegar o saldo', () => {
        

    })

    it('Deve remover uma transação', () => {
        
    })
})