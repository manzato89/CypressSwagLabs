/// <reference types="cypress" />

import cLogin from "../controller/cLogin";

function visit(){
    cLogin.acessarSite()
    cy.wait(2000)
}

function loginStandardUser(){
    let user = 'standard_user'
    let password = 'secret_sauce'

    cLogin.informarUsername(user)
    cLogin.informarPassword(password)
    cLogin.clicarBtnLogin()
}

export {visit, loginStandardUser}