/// <reference types = "cypress" />

describe('cypress basico', () => {
    it.only('visitar uma pagina e fazer uma assertiva do seu titulo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Treinamento');

        cy.title().then(title => {
            console.log(title);
            cy.get('#formNome').type(title);
        })
    })

    it('clicando em um texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click();
        cy.get('#buttonSimple').should('have.value', 'Obrigado!');
    })
})