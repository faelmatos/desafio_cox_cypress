//Mapeamento
const el = {
    firstNameField: '[data-test="firstName"',
    lastNameField: '[data-test="lastName"]',
    postalCodeField: '[data-test="postalCode"]',
    continueButton: '.btn_primary', 
    cancelButton: '.cart_cancel_link',
    errorMessageText: '[data-test="error"]'
}

//Ações
class CheckoutPage {

    preencherFirstName(firstName) {
        cy.get(el.firstNameField).type(firstName)
    }

    preencherLastName(lastName) {
        cy.get(el.lastNameField).type(lastName)
    }

    preencherPostalCode(postalCode) {
        cy.get(el.postalCodeField).type(postalCode)
    }

    selecionarContinue() {
        cy.get(el.continueButton).click()
    }

    selecionarCancel() {
        cy.get(el.cancelButton).click()
    }

    validarMensagemErro(mensagem) {
        cy.get(el.errorMessageText).should('contain', mensagem)
    }
}

export default new CheckoutPage()