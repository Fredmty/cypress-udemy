/// <reference types="cypress" />

describe('work with Iframe', () => {
  
    

    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('funciona?')
            .should('have.value', 'funciona?')
            
            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })
        })
        });

        it('Deve testar o frame', () => {
            cy.visit('https://wcaquino.me/cypress/frame.html')
            cy.get('#otherButton').click();
            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Click OK!')
            })

            
            });
    })
