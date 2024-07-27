/// <reference types="cypress" />

import cProdutos from "../../support/controller/cProdutos";
import cCarrinho from "../../support/controller/cCarrinho";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

before(() => {
    cy.acessarPagina()
    cy.loginStandardUser()
})

describe('Realizar pedido', () => {

    it('Realizar pedido', () => {

        cProdutos.clicarBtnProduto()
        cProdutos.clicarBtnCarrinho()
        cCarrinho.clicarBtnCheckout()

    })
})