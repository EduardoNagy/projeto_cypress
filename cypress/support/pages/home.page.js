const BTN_ACESSA_LOGIN = '.login'

Cypress.Commands.add('acessarLogin', () => {
    cy.screenshot(`${Cypress.spec.name}/1-acessa login`)
    
    cy.get(BTN_ACESSA_LOGIN).should('be.visible')
    cy.get(BTN_ACESSA_LOGIN).click()
})