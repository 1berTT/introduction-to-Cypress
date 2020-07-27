/// <reference types = "cypress" />

describe('Trabalhando com testes dinâmicos', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    it('Trabalhando com clock', () => {
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain', '23/07/2020');

        //cy.clock();
        //cy.get('#buttonNow').click();
        //cy.get('#resultado > span').should('contain', '31/12/1969');

        const data = new Date(2021, 12, 12, 12, 12, 12);
        cy.clock(data.getTime());
        cy.get('#buttonNow').click();
        cy.get('#resultado > span').should('contain', '12/12/2012');
    })
})