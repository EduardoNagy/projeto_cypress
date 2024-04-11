And('preencho com novo e-mail', () => {
    cy.preencherNewEmail()
})

And('avanço para tela de criação de conta', () => {
    cy.validarAcessoCriarConta()
})