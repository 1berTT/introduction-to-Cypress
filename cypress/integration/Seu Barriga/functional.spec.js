/// <reference types = "cypress" />

import locators from '../../support/locators';

describe('Testando uma aplicação real', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/');
        cy.get(locators.login.email).type('1bertt@hotmail.com');
        cy.get(locators.login.senha).type('123456789w');
        cy.get(locators.login.btnConfirm).click();
        cy.get(locators.mensagem).should('contain', 'Bem vindo, Humberto!');
    })
    it('Inserindo uma conta', () => {
        cy.get(locators.menu.config).click();
        cy.get(locators.menu.contas).click();
        cy.get(locators.contas.nome).type('Outra conta do 1berTT');
        cy.get(locators.contas.btnConfirm).click();
        cy.get(locators.mensagem).should('contain', 'sucesso');
    })

    it.only('Alterando uma conta', () => {
        cy.get(locators.menu.config).click();
        cy.get(locators.menu.contas).click();
        cy.get(':nth-child(1) > :nth-child(2) > .fa-edit').click();
        cy.get(locators.contas.nome).clear();
        cy.get(locators.contas.nome).type('Troquei o nome da conta do 1berTT outra vez');
        cy.get(locators.contas.btnConfirm).click();
        cy.get(locators.mensagem).should('contain', 'sucesso');
    })

    it.only('Inserindo conta repetida', () => {
        cy.get(locators.menu.config).click();
        cy.get(locators.menu.contas).click();
        cy.get(locators.contas.nome).type('Conta do 1berTT');
        cy.get(locators.contas.btnConfirm).click();
        cy.get(locators.mensagem).should('contain', 'Erro');
    })

    it.only('Inserindo uma nova movimentação', () => {
        cy.get(locators.menu.movimentacao).click();
        //cy.get(locators.movimentacao.btnDespesa).click();
        cy.get(locators.movimentacao.dataTransacao).type('2020-02-11');
        cy.get(locators.movimentacao.dataTransacao).type('2020-06-27');
        cy.get(locators.movimentacao.descricao).type('testando');
        cy.get(locators.movimentacao.valor).type(200.55);
        cy.get(locators.movimentacao.interessado).type('Etevaldo dos santos');
        cy.get(locators.movimentacao.conta).select('Outra conta do 1berTT');
        cy.get(locators.movimentacao.btnStatus).click();
        cy.get(locators.movimentacao.btnConfirm).click();
        cy.get(locators.mensagem).should('contain', 'sucesso');
    })
})