/// <reference types = "cypress" />

it('igualdade', () => {
    const a = 1;
    expect(a).equal(1);
    expect(a, 'Deveria ser igual a 1').to.be.equal(1);
    expect('humberto').not.to.be.equal('nilberto');
})

it('true or false', () => {
    const a = true;
    expect(a).to.be.true;
})

it('igualdade de objetos', () => {
    const obj = {
        a: 1,
        b: 2
    }
    
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({a:1, b:2});
    expect(obj).eql({a:1, b:2});
    expect(obj).include({a:1});
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('igualdade de arrays', () => {
    const array = [1,2,3];
    expect(array).to.have.members([1,2,3]);
    expect(array).to.include.members([1,3]);
    expect(array).to.not.be.empty;
    expect([]).to.be.empty;

})

it('igualdade de tipos', () => {
    const num = 1;
    const str = "String";
    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.a('object');
    expect([]).to.be.a('array');
})

it('testes com strings', () => {
    const str = "String de teste";

    expect(str).to.be.equal("String de teste");
    expect(str).to.have.length(15);
    expect(str).to.have.contains("teste");
    expect(str).to.match(/de/);
    expect(str).to.match(/^String/);
    expect(str).to.match(/teste$/);
    expect(str).to.match(/\w+/);
})

it('testes com numeros', () => {
    const number = 4;
    const floatNumber = 5.12;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(6);
    expect(floatNumber).to.be.equal(5.12);
})