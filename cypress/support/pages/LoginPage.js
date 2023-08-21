//Mapeamento
const el = {
    usernameField: '[data-test="username"]',
    passwordField: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]'
}

//Ações
class LoginPage {

    preencherUsername(username) {
        cy.get(el.usernameField).type(username)
    }

    preencherPassword(password) {
        cy.get(el.passwordField).type(password)
    }

    clicarBotaoLogin() {
        cy.get(el.loginButton).click()
    }

    validarMensagemRetornada(mensagem) {
        cy.get(el.errorMessage).should('contain', mensagem)
    }
}

export default new LoginPage()