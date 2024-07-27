/// <reference types="cypress" />

import { mCheckout as Element } from "../model/mCheckout";

class cCjeckout {

    clicarBtnFinish() {
        cy.get(Element.button.btnFinish)
            .should('exist')
            .click()
    }

    clicarBtnBackHome() {
        cy.get(Element.button.btnBackHome)
            .should('exist')
            .click()
    }

    validarPedidoFinalizdao(mensagem){
        cy.get('.complete-header')
            .should('exist').then(($elem) => {
              let element = $elem.text()
                expect(element).to.equal(mensagem, "Pedido Finalizado com Sucesso")
              
            })
    }   
}

export default new cCjeckout()