/// <reference types = "cypress" />

describe('testando a sincronia do cypress', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('aguarda o elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funcionou');
    })

    it('deve fazer retentativas', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist').type('funcionou');
    })

    it('Usando o find', () => {
        cy.get('#buttonList').click();
        cy.get('#lista li').find('span').should('contain', 'Item 1');
        cy.get('#lista li span').should('contain', 'Item 2');
        
    })

    it('usando o timeout', () => {
        //cy.get('#buttonDelay').click();
        //cy.get('#novoCampo').should('exist');
        cy.get('#buttonListDOM').click();
        //cy.wait(5000);
        cy.get('#lista li span').should('contain', 'Item 2');
    })

    it('retry', () => {
        cy.get('#buttonCount').click().should('have.value', '11');
    })

    it.only('should vs. then', () => {
        cy.get('#buttonListDOM').click();
        cy.get('#lista li span').should($el => {
            //console.log($el);
            expect($el).to.have.length(1);
            return 2;
        }).and('have.id', 'buttonListDOM');
    })
})