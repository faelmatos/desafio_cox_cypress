//Mapeamento
const el = {
    continueShoppingButton: '.cart_footer > .btn_secondary',
    checkoutButton: '.btn_action',
    removeProductButton: '.item_pricebar > .btn_secondary'
}

//Ações
class CartPage {

    selecionarContinuarComprando() {
        cy.get(el.continueShoppingButton).click()
    }

    selecionarCheckout() {
        cy.get(el.checkoutButton).click()
    }

    removerProdutoDentroCarrinho() {
        cy.get(el.removeProductButton).click()
    }

}

export default new CartPage()