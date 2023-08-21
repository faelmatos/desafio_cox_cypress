///<reference types="Cypress"/>

import "../support/commands"
import constants from "../support/constants"
import InventoryPage from "../support/pages/InventoryPage"

describe('Testes no inventário de produtos', () => {

    beforeEach(() => {
        cy.login(
            constants.LOGIN.STANDARD_USERNAME,
            constants.LOGIN.DEFAULT_PASSWORD
        )
    })

    it('Deve ordenar os preços do menor para o maior', () => {
        InventoryPage.selecionarOpcaoOrdenacaoProdutos('lohi')
        InventoryPage.validarPrecosOrdemCrescente()
    })

    it('Deve ordenar os preços do maior para o menor', () => {
        InventoryPage.selecionarOpcaoOrdenacaoProdutos('hilo')
        InventoryPage.validarPrecosOrdemDecrescente()
    })

    it('Deve ordenar o nome dos produtos de A a Z', () => {
        InventoryPage.selecionarOpcaoOrdenacaoProdutos('az')
        InventoryPage.validarNomesOrdemAlfabeticaAZ()
    })

    it('Deve ordenar o nome dos produtos de Z a A', () => {
        InventoryPage.selecionarOpcaoOrdenacaoProdutos('za')
        InventoryPage.validarNomesOrdemAlfabeticaZA()
    })

    it('Deve adicionar produtos ao carrinho', async () => {
        const numeroProdutosAdicionados = await InventoryPage.adicionarTodosProdutosCarrinho()
        InventoryPage.validarProdutosAdicionados(numeroProdutosAdicionados)
    })

    it('Deve remover todos os produtos do carrinho', () => {
        InventoryPage.adicionarTodosProdutosCarrinho()
        InventoryPage.removerTodosProdutosCarrinho()
        InventoryPage.validarCarrinhoVazio()
    })

})