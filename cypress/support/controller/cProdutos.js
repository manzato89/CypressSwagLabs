/// <reference types="cypress" />

import { mProdutos as Element } from "../model/mProdutos";

class cPrdutos {

    clicarBtnProduto(){
        cy.get(Element.buttons.btnAdicionarjacket)
            .should('exist')
            .click()
    }

    clicarBtnCarrinho(){
        cy.get(Element.buttons.btnCarrinhoCompras)
            .should('exist')
            .click()
    }

    
}

export default new cPrdutos();
