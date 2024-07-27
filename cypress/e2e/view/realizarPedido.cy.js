/// <reference types="cypress" />

import cProdutos from "../../support/controller/cProdutos";
import cCarrinho from "../../support/controller/cCarrinho";
import cYourInformation from "../../support/controller/cYourInformation";
import cCheckout from "../../support/controller/cCheckout";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

before(() => {
    cy.acessarPagina()
    cy.loginStandardUser()
})

let nome = 'Teste'
let sobrenome = 'SubTeste'
let cep = '11111-111'
let mensagem = 'Thank you for your order!'

describe('Realizar pedido', () => {

    it('Realizar pedido', () => {

        cProdutos.clicarBtnProduto()
        cProdutos.clicarBtnCarrinho()
        cCarrinho.clicarBtnCheckout()
        cYourInformation.informarFirstName(nome)
        cYourInformation.informarLastName(sobrenome)
        cYourInformation.informarPostalCode(cep)
        cYourInformation.clicarBtnContinue()
        cCheckout.clicarBtnFinish()
        cCheckout.validarPedidoFinalizdao(mensagem)
        //cCheckout.clicarBtnBackHome
    
    })
})