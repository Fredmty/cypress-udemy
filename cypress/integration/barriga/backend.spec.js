/// <reference types="cypress" />


describe('work with alert', () => {
    let token
        before(() => {
        cy.getToken('a@a', 'a')
        .then(tkn => {
            token = tkn
        })
        })
        beforeEach(() => {
            cy.resetRest()
        })
    
        it('deve criar uma conta', () => {
            cy.request({
                method: 'POST',
                headers: {Authorization: `JWT ${token}`},
                url: '/contas',
                body: { nome: 'conta via rest' },
            }).as('response')
           cy.get('@response').then(res => {
               expect(res.status).to.be.equal(201);
               expect(res.body).to.have.property('id')
               expect(res.body).to.have.property('nome', 'conta via rest')
           })
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
    