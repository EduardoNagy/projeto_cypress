const BTN_SUBMIT_ACCOUNT = '#submitAccount'
const BTN_CONTA = '.account'

Cypress.Commands.add('registrarUsuario', () => {
    cy.get(BTN_SUBMIT_ACCOUNT).click()
})

Cypress.Commands.add('validarCadastro', () => {
    cy.get('p.alert.alert-success').should('contain', 'Your account has been created.')
    cy.get(BTN_CONTA).should('be.visible')

    cy.screenshot(`${Cypress.spec.name}/4-usuário criado e logado`)
})