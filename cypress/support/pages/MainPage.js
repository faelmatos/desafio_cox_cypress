//Mapeamento
const el = {
    menuButton: '.bm-burger-button > button',
    allItemsOption: '#inventory_sidebar_link',
    aboutOption: '#about_sidebar_link',
    logoutOption: '#logout_sidebar_link',
    resetOption: '#reset_sidebar_link',
    closeButton: '.bm-cross-button > button'
}

//Ações
class MainPage {

    clicarMenu() {
        cy.get(el.menuButton).click()
    }

    clicarAllItems() {
        cy.get(el.allItemsOption).click()
    }

    clicarAbout() {
        cy.get(el.aboutOption).click()
    }

    clicarLogout() {
        cy.get(el.logoutOption).click()
    }

    clicarReset() {
        cy.get(el.resetOption).click()
    }

    clicarFecharMenu() {
        cy.get(el.closeButton).click()
    }

    validarUsuarioLogado() {
        cy.get(el.logoutOption).should('contain', 'Logout')
    }

    validarPaginaAtual(url) {
        cy.url().should('eq', url);
    }

}

export default new MainPage()  