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

    it('CamposdeTextos', () => {
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
    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name=formSexo]").should('have.length', 2)

    });

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]')
        .click({multiple:true})
        .should('be.checked')

        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    });
    //combo = verificar pela propriedade 'value' no hatml, não pelo text
    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test="dataEscolaridade"]')
        .select('1graucomp')
        .should('have.value', '1graucomp')

        cy.get('[data-test=dataEscolaridade] option').should('have.length', 8);
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })
        //TODO validar as opções do combo
    });
    //combo multioplo = deve ser enviado o value
    it('combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'Corrida'])
       // cy.get('[data-testid=dataEsportes').should('have.value', ['Natacao', 'Corrida', 'Nada']);

       cy.get('[data-testid=dataEsportes').then($el => {
           expect($el.val()).to.be.deep.equal(['natacao', 'Corrida'])
           expect($el.val()).to.have.length(2)

           
       })
       cy.get('[data-testid=dataEsportes').invoke('val').should('eql', ['natacao', 'Corrida'])
        //TODO validar opções selecionadas do combo multiplo
    });
})