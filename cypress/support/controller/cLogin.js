/// <reference types="cypress" />

import { mLogin as Element } from "../model/mlogin";

class cLogin {

    acessarSite(){
        cy.visit('https://www.saucedemo.com')
    }

    informarUsername(user){
        cy.get(Element.fields.txtUsername)
            .should('exist')
            .type(user)
    }

    informarPassword(password){
        cy.get(Element.fields.txtPassword)
            .should('exist')
            .type(password)
    }

    clicarBtnLogin(){
        cy.get(Element.button.btnLogin)
            .should('exist')
            .click()
    }
}

export default new cLogin();