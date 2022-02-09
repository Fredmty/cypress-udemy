/// <reference types="cypress"/>

it.only('a external test...', () => {

})

describe.skip('deve agruapr testes...', () => {

    describe('deve ter testes especificos', () => {
        it.skip('teste especifico', () => {
            
        });
    })

    it('a external test...', () => {

    })
})

it('a internal teste case', () => {
    
});


//skip da bypass no teste que está com ele
//only pega o ÚLTIMO caso de teste que tiver only. 