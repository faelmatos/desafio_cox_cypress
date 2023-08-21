//Mapeamento
const el = {
  ordenacaoProdutosCombobox: '.product_sort_container',
  valorProdutoField: '.inventory_item_price',
  nomeProdutoField: '.inventory_item_name',
  adicionaCarrinhoButton: '.btn_primary',
  removeDoCarrinhoButton: '.btn_secondary',
  contadorProdutosCarrinhoField: '.fa-layers-counter',
  adicionaCarrinhoItem1Button: ':nth-child(1) > .pricebar > .btn_primary',
  adicionaCarrinhoItem2Button: ':nth-child(2) > .pricebar > .btn_primary',
  carrinhoButton: '.svg-inline--fa'
}

//Ações
class InventoryPage {

  selecionarOpcaoOrdenacaoProdutos(opcao) {
    cy.get(el.ordenacaoProdutosCombobox).select(opcao)
  }

  buscarPrecosProdutos() {
    return cy.get(el.valorProdutoField).then(prices => {
      // Converte o objeto jQuery-like em um array JavaScript
      return Cypress.$.makeArray(prices).map(el => {
        // Converte o texto do preço em um número (removendo o símbolo de moeda)
        const priceText = Cypress.$(el).text().replace('$', '').trim();
        return parseFloat(priceText);
      });
    });
  }

  validarPrecosOrdemCrescente() {
    this.buscarPrecosProdutos().then(priceArray => {
      // Cria uma cópia ordenada dos preços
      const sortedPrices = [...priceArray].sort((a, b) => a - b);

      // Verifica se os preços estão em ordem crescente
      expect(priceArray).to.deep.equal(sortedPrices);
    });
  }

  validarPrecosOrdemDecrescente() {
    this.buscarPrecosProdutos().then(priceArray => {
      // Cria uma cópia ordenada dos preços de forma decrescente
      const sortedPrices = [...priceArray].sort((a, b) => b - a);

      // Verifica se os preços estão em ordem decrescente
      expect(priceArray).to.deep.equal(sortedPrices);
    });
  }

  buscarNomesProdutos() {
    // Retorna todos os nomes dos produtos que estão na página
    return cy.get(el.nomeProdutoField).then(names => {
      return Cypress.$.makeArray(names).map(el => {
        return Cypress.$(el).text().trim();
      });
    });
  }

  validarNomesOrdemAlfabeticaAZ() {
    this.buscarNomesProdutos().then(nameArray => {
      const sortedNames = [...nameArray].sort();

      // Verifica se os nomes estão em ordem alfabética de A a Z
      expect(nameArray).to.deep.equal(sortedNames);
    });
  }

  validarNomesOrdemAlfabeticaZA() {
    this.buscarNomesProdutos().then(nameArray => {
      const sortedNames = [...nameArray].sort((a, b) => b.localeCompare(a));

      // Verifica se os nomes estão em ordem alfabética de Z a A
      expect(nameArray).to.deep.equal(sortedNames);
    });
  }

  adicionarProdutoUmCarrinho() {
    cy.get(el.adicionaCarrinhoItem1Button).click()
  }

  adicionarProdutoDoisCarrinho() {
    cy.get(el.adicionaCarrinhoItem2Button).click()
  }

  adicionarTodosProdutosCarrinho() {
    return new Promise((resolve) => {
      cy.resetAppState();
      let contadorProdutosAdicionados = 0;
      // Adiciona todos os produtos ao carrinho contando quantos produtos foram adicionados
      cy.get(el.adicionaCarrinhoButton).each(($button) => {
        cy.wrap($button).click();
        contadorProdutosAdicionados++;
      }).then(() => {
        // Retorna o número de produtos adicionados
        resolve(contadorProdutosAdicionados);
      });
    });
  }

  validarProdutosAdicionados(numProdutos) {
    cy.get(el.contadorProdutosCarrinhoField).should('have.text', numProdutos);
  }

  removerTodosProdutosCarrinho() {
    cy.get(el.removeDoCarrinhoButton).each(($button) => {
      cy.wrap($button).click();
    })
  }

  validarCarrinhoVazio() {
    cy.get(el.contadorProdutosCarrinhoField).should('not.exist');
  }

  acessarCarrinho() {
    cy.get(el.carrinhoButton).click()
  }

}

export default new InventoryPage()  