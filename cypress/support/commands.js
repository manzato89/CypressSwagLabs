import * as loginUsuario from "./request/loginUser";

Cypress.Commands.add('acessarPagina',() => {
    loginUsuario.visit()
})

Cypress.Commands.add('loginStandardUser', () => {
    loginUsuario.loginStandardUser()
})
    