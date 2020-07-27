/// <reference types = "cypress" />

describe('Trabalhando com testes dinâmicos', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    const comidas = ['Carne', 'Frango', 'Pizza', 'Vegetariano'];
    comidas.forEach(food => {
        it(`Cadastro com ${food}`, () => {
            cy.get('#formNome').type('Etevaldo');
            cy.get('#formSobrenome').type('Dos Santos');
            cy.get('[name=formSexo][value=M]').click();
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`);
            cy.get('#formEscolaridade').select('Doutorado');
            cy.get('#formEsportes').select('Corrida');
            cy.get('#formCadastrar').click();
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
        })
    })

    it.only('Deve selecionar todos usando o Each', () => {
        cy.get('#formNome').type('Etevaldo');
        cy.get('#formSobrenome').type('Dos Santos');
        cy.get('[name=formSexo][value=M]').click();
        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() != 'vegetariano'){
                cy.wrap($el).click();
            }
        })
        cy.get('#formEscolaridade').select('Doutorado');
        cy.get('#formEsportes').select('Corrida');
        cy.get('#formCadastrar').click();
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
        //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?');
    })

})