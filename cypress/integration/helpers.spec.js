/// <reference types = "cypress" />

describe('Trabalhando com helpers', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })
    
    it('wrap', () => {
        const obj  = {nome: '1berTT', idade: 22};
        expect(obj).to.have.property('nome');
        cy.wrap(obj).should('have.property', 'nome');
        /*cy.get('#formNome').then($el => {
            cy.wrap($el).type('Funciona via Cypress');
        })*/

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10);
            },500);
        });

        cy.get('#buttonSimple').then(() => {
            console.log("Encontrei o primeiro botão");
        })
        cy.wrap(promise).then(ret => {
            console.log(ret);
        })
        cy.get('#buttonList').then(() => {
            console.log("Encontrei o segundo botão");
        })
    })

    it('Its...', () => {
        const obj  = {nome: '1berTT', idade: 22};
        cy.wrap(obj).should('have.property', 'nome', '1berTT');
        cy.wrap(obj).its('nome').should('be.equal', '1berTT');

        const obj2  = {nome: '1berTT', idade: 22, endereco: {rua: 'raul nogueira'}};
        cy.wrap(obj2).its('endereco.rua').should('contain', 'raul nogueira');

        cy.title().its('length').should('be.equal', 20);
    })

    it.only('Invoker', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;
        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1);
        cy.wrap({fn: soma}).invoke('fn', 7, -2).should('be.equal', 5);
        cy.get('#formNome').invoke('val', 'Texto via invoke');
    })
})