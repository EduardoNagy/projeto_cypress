const novoemail = '#email_create'
const BTN_ACCOUNT = '#SubmitCreate'

Cypress.Commands.add('preencherNewEmail', () => {
    var faker = require ('faker-br')
    let meuEmail = faker.internet.email();

    cy.get(novoemail).type(meuEmail, )
    Cypress.env ('usuario', novoemail)
    
    cy.screenshot(`${Cypress.spec.name}/2-email válido preenchido`)
})

Cypress.Commands.add('validarAcessoCriarConta', () => {
    cy.get(BTN_ACCOUNT).should('be.visible')
    cy.get(BTN_ACCOUNT).click()
})