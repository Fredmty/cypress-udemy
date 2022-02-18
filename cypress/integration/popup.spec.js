/// <reference types="cypress" />
//@ é o nick do alias
describe('work with Iframe', () => {
  
    

    it('Deve verificar popup', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
        });

     it('Deve testar o popup invocado', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click();
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
            })
            });
    })

    describe('popup', () => { 
        beforeEach(() =>{
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        })
        it('deve testar popup com link', () => {
            cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        });

        it('deve acessar popup dinamicamente', () => {
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona');
            })
        });

        it('deve foraçr abrir link na mesma pagina', () => {
            cy.contains('Popup2').invoke('removeAttr', 'target')
            .click()
            cy.get('#tfield').type('funciona');
        });
    })
