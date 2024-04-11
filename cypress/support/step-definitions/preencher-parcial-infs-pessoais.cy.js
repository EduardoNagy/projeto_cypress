And('não preencho todos os campos obrigatórios de informações pessoais', () => {
    cy.preencherParcialCadastro()
})

And('clico no botão de Registro', () => {
    cy.validarRegistroDados()
})

Then('é exibida mensagem de preenchimento obrigatório dos campos', () => {
    cy.validarAlertDadosPessoais()
})