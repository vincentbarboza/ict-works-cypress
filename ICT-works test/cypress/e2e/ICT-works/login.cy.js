describe('ICT-works login tests', () => {
    beforeEach(() => {
      cy.visit('https://www.huishoudelijke-hulp.nl/')
    }) 
    it('No email test', () => {
        cy.get('.c-header__account-picture > .c-context-menu__toggle__icon').click();
        cy.contains('a', 'Login').click()
        cy.contains('button', 'Log in').click()
        cy.contains('div', 'Graag invullen').should('be.visible');
    })

    it('Wrong password test', () => {
        cy.get('.c-header__account-picture > .c-context-menu__toggle__icon').click();
        cy.contains('a', 'Login').click();
        cy.get('input[name="username"]').type('test');
        cy.get('input[name="password"]').type('1');
        cy.contains('button', 'Log in').click();
        
    })


  })