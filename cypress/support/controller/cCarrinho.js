/// <reference types="cypress" />

import { mCarrinho as Element } from "../model/mCarrinho";

class cCarrinho {
    clicarBtnCheckout() {  
        cy.get(Element.buttons.btnCheckout)
            .should('exist')
            .click()
    }
}   

export default new cCarrinho()