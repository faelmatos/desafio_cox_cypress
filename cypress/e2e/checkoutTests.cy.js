///<reference types="Cypress"/>

import constants from "../support/constants"
import CartPage from "../support/pages/CartPage"
import CheckoutOverviewPage from "../support/pages/CheckoutOverviewPage"
import CheckoutPage from "../support/pages/CheckoutPage"
import FinishPage from "../support/pages/FinishPage"
import InventoryPage from "../support/pages/InventoryPage"

describe('Testes de checkout', () => {

    beforeEach(() => {
        cy.login(
            constants.LOGIN.STANDARD_USERNAME,
            constants.LOGIN.DEFAULT_PASSWORD
        )
        cy.resetAppState()
        InventoryPage.adicionarProdutoUmCarrinho()
        InventoryPage.acessarCarrinho()
    })

    it('Deve remover produto de dentro do carrinho', () => {
        CartPage.removerProdutoDentroCarrinho()
        InventoryPage.validarCarrinhoVazio()
    })

    it('Deve comprar mais de um produto utilizando a opção "Continuar comprando" dentro do carrinho', () => {
        CartPage.selecionarContinuarComprando()
        InventoryPage.adicionarProdutoDoisCarrinho()
        InventoryPage.acessarCarrinho()
        InventoryPage.validarProdutosAdicionados(2)
    })

    it('Deve fazer compra com sucesso', () => {

        const informacoesCheckout = {
            quantidade: '1',
            nome: 'Sauce Labs Backpack', 
            descricao: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            valor: '$29.99',
            informacaoPagamento: 'SauceCard #31337',
            informacaoEntrega: 'FREE PONY EXPRESS DELIVERY!',
            subtotal: 'Item total: $29.99',
            taxa: 'Tax: $2.40',
            total: 'Total: $32.39'
        }

        const thankYouMessage = 'THANK YOU FOR YOUR ORDER'
        const orderDispatchedMessage = 'Your order has been dispatched'

        CartPage.selecionarCheckout()
        CheckoutPage.preencherFirstName('Rafael')
        CheckoutPage.preencherLastName('Matos')
        CheckoutPage.preencherPostalCode('35500402')
        CheckoutPage.selecionarContinue()
        CheckoutOverviewPage.validarInformacoesCheckout(informacoesCheckout)
        CheckoutOverviewPage.clicarFinish()
        FinishPage.validarMensagensCompraFinalizada(thankYouMessage, orderDispatchedMessage)
        InventoryPage.validarCarrinhoVazio()
    })

    it('Não deve permitir continuar a compra com First Name em branco', () => {
        CartPage.selecionarCheckout()
        CheckoutPage.selecionarCancel()
        CartPage.selecionarCheckout()
        CheckoutPage.preencherLastName('Matos')
        CheckoutPage.preencherPostalCode('35500402')
        CheckoutPage.selecionarContinue()
        CheckoutPage.validarMensagemErro('Error: First Name is required')
    })

    it('Não deve permitir continuar a compra com Last Name em branco', () => {
        CartPage.selecionarCheckout()
        CheckoutPage.preencherFirstName('Rafael')
        CheckoutPage.preencherPostalCode('35500402')
        CheckoutPage.selecionarContinue()
        CheckoutPage.validarMensagemErro('Error: Last Name is required')
    })

    it('Não deve permitir continuar a compra com ZIP/Postal Code em branco', () => {
        CartPage.selecionarCheckout()
        CheckoutPage.preencherFirstName('Rafael')
        CheckoutPage.preencherLastName('Matos')
        CheckoutPage.selecionarContinue()
        CheckoutPage.validarMensagemErro('Error: Postal Code is required')
    })

})