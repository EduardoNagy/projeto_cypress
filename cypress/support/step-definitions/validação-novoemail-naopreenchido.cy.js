And('o campo e-mail não é preenchido', () => {
    cy.naoPreencherNovoEmail()
})

And('clico no botão para criar uma conta', () => {
    cy.validarCriarContaSemEmail()
})

Then('é exibida mensagem de preenchimento obrigatório do e-mail', () => {
    cy.validarAlertEmail()
})