///<reference types="Cypress"/>

import LoginPage from "../support/pages/LoginPage"
import MainPage from "../support/pages/MainPage"
import constants from "../support/constants"

describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Deve fazer login com o usuário standard', () => {
        LoginPage.preencherUsername(constants.LOGIN.STANDARD_USERNAME)
        LoginPage.preencherPassword(constants.LOGIN.DEFAULT_PASSWORD)
        LoginPage.clicarBotaoLogin()
        MainPage.clicarMenu()
        MainPage.validarUsuarioLogado()
    })

    it('Deve retornar mensagem de usuário bloqueado ao tentar fazer login com o usuário locked_out', () => {
        LoginPage.preencherUsername(constants.LOGIN.LOCKED_OUT_USERNAME)
        LoginPage.preencherPassword(constants.LOGIN.DEFAULT_PASSWORD)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarMensagemRetornada('Epic sadface: Sorry, this user has been locked out.')
    })

    it('Deve fazer login com o usuário problem_user', () => {
        LoginPage.preencherUsername(constants.LOGIN.PROBLEM_USERNAME)
        LoginPage.preencherPassword(constants.LOGIN.DEFAULT_PASSWORD)
        LoginPage.clicarBotaoLogin()
        MainPage.clicarMenu()
        MainPage.validarUsuarioLogado()
    })

    it('Deve fazer login com o usuário performance_glitch_user', () => {
        LoginPage.preencherUsername(constants.LOGIN.PERFORMANCE_GLITCH_USERNAME)
        LoginPage.preencherPassword(constants.LOGIN.DEFAULT_PASSWORD)
        LoginPage.clicarBotaoLogin()
        MainPage.clicarMenu()
        MainPage.validarUsuarioLogado()
    })

    it('Não deve fazer login sem usuário e senha', () => {
        LoginPage.clicarBotaoLogin()
        LoginPage.validarMensagemRetornada('Epic sadface: Username is required')
    })

    it('Não deve fazer login com usuário válido e sem senha', () => {
        LoginPage.preencherUsername(constants.LOGIN.STANDARD_USERNAME)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarMensagemRetornada('Epic sadface: Password is required')
    })

    it('Não deve fazer login com usuário inválido', () => {
        LoginPage.preencherUsername('invalid_user')
        LoginPage.preencherPassword(constants.LOGIN.DEFAULT_PASSWORD)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarMensagemRetornada('Epic sadface: Username and password do not match any user in this service')
    })

    it('Não deve fazer login com senha inválido', () => {
        LoginPage.preencherUsername(constants.LOGIN.STANDARD_USERNAME)
        LoginPage.preencherPassword('invalid_secret')
        LoginPage.clicarBotaoLogin()
        LoginPage.validarMensagemRetornada('Epic sadface: Username and password do not match any user in this service')
    })

})