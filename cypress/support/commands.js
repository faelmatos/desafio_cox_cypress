///<reference types="Cypress"/>

import LoginPage from "../support/pages/LoginPage";
import MainPage from "../support/pages/MainPage";

Cypress.Commands.add('login', (username, password) => {  
    cy.visit('/')
    LoginPage.preencherUsername(username)
    LoginPage.preencherPassword(password)
    LoginPage.clicarBotaoLogin()
})

Cypress.Commands.add('resetAppState', () => {
    MainPage.clicarMenu()
    MainPage.clicarReset()
    MainPage.clicarFecharMenu()
})