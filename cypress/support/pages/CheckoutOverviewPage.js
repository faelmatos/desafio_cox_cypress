//Mapeamento
const el = {
    quantidadeProdutoText: '.summary_quantity',
    nomeProdutoText: '.inventory_item_name',
    descricaoProdutoText: '.inventory_item_desc',
    valorProdutoText: '.inventory_item_price',
    informacaoPagamentoText: '.summary_info > :nth-child(2',
    informacaoEntregaText: '.summary_info > :nth-child(4)',
    subtotalText: '.summary_subtotal_label',
    taxaText: '.summary_tax_label',
    totalText: '.summary_total_label',
    cancelarButton: '.cart_cancel_link',
    finalizarButton: '.btn_action'
}

//Ações
class CheckoutOverviewPage {

    clicarCancel() {
        cy.get(el.cancelarButton).click()
    }

    clicarFinish() {
        cy.get(el.finalizarButton).click()
    }

    validarInformacoesCheckout(informacoesCheckout) {
        cy.get(el.quantidadeProdutoText).should('contain', informacoesCheckout.quantidade)
        cy.get(el.nomeProdutoText).should('contain', informacoesCheckout.nome)
        cy.get(el.descricaoProdutoText).should('contain', informacoesCheckout.descricao)
        cy.get(el.valorProdutoText).should('contain', informacoesCheckout.valor)
        cy.get(el.informacaoPagamentoText).should('contain', informacoesCheckout.informacaoPagamento)
        cy.get(el.informacaoEntregaText).should('contain', informacoesCheckout.informacaoEntrega)
        cy.get(el.subtotalText).should('contain', informacoesCheckout.subtotal)
        cy.get(el.taxaText).should('contain', informacoesCheckout.taxa)
        cy.get(el.totalText).should('contain', informacoesCheckout.total)
    }

}

export default new CheckoutOverviewPage()