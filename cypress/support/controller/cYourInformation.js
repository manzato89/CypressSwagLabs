/// <reference types="cypress" />

import { mYourInformation as Element } from "../model/mYourInformation";

class cYourInformation {

    clicarBtnContinue() {
        cy.get(Element.buttons.btnContinue)
            .should('exist')
            .click()
    }

    informarFirstName(firstName) {
        cy.get(Element.fields.txtFirstName)
            .should('exist')
            .type(firstName)
    }

    informarLastName(lastName) {
        cy.get(Element.fields.txtLastName)
            .should('exist')
            .type(lastName)
    }

    informarPostalCode(postalCode) {
        cy.get(Element.fields.txtPostalCode)
            .should('exist')
            .type(postalCode)
    }

}

export default new cYourInformation();