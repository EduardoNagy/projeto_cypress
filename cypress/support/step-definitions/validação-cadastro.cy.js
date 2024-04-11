And('clico no botão de Registro', () => {
    cy.registrarUsuario()
})

Then('novo usuário é cadastrado no sistema', () => {
    cy.validarCadastro()
})