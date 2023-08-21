//Mapeamento
const el = {
    thankYouMessageText: '.complete-header',
    orderDispatchedText: '.complete-text'
}

//Ações
class CartPage {

    validarMensagensCompraFinalizada(thankYouMessage, orderDispatchedMessage) {
        cy.get(el.thankYouMessageText).should('contain', thankYouMessage)
        cy.get(el.orderDispatchedText).should('contain', orderDispatchedMessage)
    }

}

export default new CartPage()