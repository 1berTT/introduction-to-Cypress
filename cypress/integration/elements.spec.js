/// <reference types = "cypress" />

describe('trabalhando com elementos básicos', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
        cy.reload();
    })
    
    it('Trabalhando com textos', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');    
    })

    it('campos de texto', () => {
        cy.get('#formNome').type('Cypress test');
        cy.get('#formNome').should('have.value', 'Cypress test');

        cy.get('#elementosForm\\:sugestoes').type('O palmeiras nao tem mundial');
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'O palmeiras nao tem mundial');

        cy.get(':nth-child(4) > :nth-child(6) > input').type('testando');
        cy.get(':nth-child(4) > :nth-child(6) > input').should('have.value', 'testando');

        cy.get('[data-cy=dataSobrenome]').type('teste12345{backspace}{backspace}');

        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto', {delay:200}).should('have.value', 'acerto');
    })

    it('Radio button', () => {
        cy.get('#formSexoFem').click().should('be.checked');
        cy.get('#formSexoMasc').should('not.be.checked');
        cy.get("[name='formSexo']").should('have.length', 2);
    })

    it('check box', () => {
        cy.get('#formComidaPizza').click().should('be.checked');
        cy.get("[name='formComidaFavorita']").click({multiple: true});
        cy.get('#formComidaPizza').should('not.be.checked');
        cy.get('#formComidaVegetariana').should('be.checked');
    })

    it.only('combo box', () => {
        cy.get('[data-test=dataEscolaridade]').select('Doutorado').should('have.value', 'doutorado');
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = [];
            $arr.each(function () {
                values.push(this.innerHTML);
            });
            expect(values).to.include.members(["Superior", "Mestrado"]);
        });
    })

    it('combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]').select(['futebol', 'Karate']);
    })
})