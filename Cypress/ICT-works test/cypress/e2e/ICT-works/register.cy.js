describe('ICT-works register tests', () => {
    beforeEach(() => {
      cy.visit('https://www.huishoudelijke-hulp.nl/')
    }) 
    it('Error test', () => {
        cy.get('.c-header__account-picture > .c-context-menu__toggle__icon').click();
        cy.contains('a', 'Registreer').click()
        cy.contains('button', 'Doorgaan').click()
        cy.contains('div', 'Graag invullen').should('be.visible');
    })
  })