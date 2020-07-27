/// <reference types = "cypress" />

describe('Trabalhando com helpers', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Trabalhando com locators...', () => {
        cy.xpath('//input');
    })
})