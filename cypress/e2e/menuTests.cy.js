///<reference types="Cypress"/>

import constants from "../support/constants"
import MainPage from "../support/pages/MainPage";

describe('Testes do menu', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login(
            constants.LOGIN.STANDARD_USERNAME,
            constants.LOGIN.DEFAULT_PASSWORD
        )
        MainPage.clicarMenu()
    })

    it('Deve acessar o submenu All Items', () => {
        MainPage.clicarAllItems()
        MainPage.validarPaginaAtual('https://www.saucedemo.com/v1/inventory.html')
    })

    it('Deve acessar o submenu Logout', () => {
        MainPage.clicarLogout()
        MainPage.validarPaginaAtual('https://www.saucedemo.com/v1/index.html')
    })
})