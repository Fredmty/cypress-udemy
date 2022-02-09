/// <reference types="cypress"/>
//é possível escrever uma mensagem com o erro que deveria aparecer na tela
it('Igualdade', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
});

it('Verdadeiros', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;

});

it('Igualdade de Objetos', () => {
    const obj = {
        a:1,
        b:2
    }
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)

    expect(obj).to.be.deep.equal({a :1,b: 2})
    expect(obj).eql({a :1,b: 2})
    expect(obj).include({a: 1})
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
    
    
});

it('Vetores', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.include.members([1,3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
});


it('Tipos', () => {
    const num = 1;
    const str = 'String'

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
});

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/);
    expect(str).to.match(/^String/); //ve se começa com String a frase
    expect(str).to.match(/teste$/); //ve se termina com a String teste
    expect(str).to.match(/.{15}/); //ve se contém 15 caracteres
    expect(str).to.match(/\w+/);// ve se contem apenas letras 
    expect(str).to.match(/\D+/);// ve se não contem numeros

});

it('Numeros', () => {
    const numero = 4;
    const float = 5.421

    expect(numero).to.be.equal(4);
    expect(numero).to.be.above(3);
    expect(numero).to.be.below(7);
    expect(float).to.be.equal(5.421);
    expect(float).to.be.closeTo(5.3, 0.2);
});
