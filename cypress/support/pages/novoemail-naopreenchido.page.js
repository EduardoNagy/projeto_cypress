const novoemail = '#email_create'
const BTN_ACCOUNT = '#SubmitCreate'

Cypress.Commands.add('naoPreencherNovoEmail', () => {
    var faker = require ('faker-br')
    let meuEmail = faker.internet.email();

    //cy.get(novoemail).type(meuEmail, )
    //Cypress.env ('usuario', novoemail)
   
    //cy.screenshot(`${Cypress.spec.name}/2-email não preenchido`)
})

Cypress.Commands.add('validarCriarContaSemEmail', () => {
    cy.get(BTN_ACCOUNT).should('be.visible')
    cy.get(BTN_ACCOUNT).click()
   
})

Cypress.Commands.add('validarAlertEmail', () => {
    cy.get('.alert.alert-danger').should('contain', 'Invalid email address.')
    
    cy.screenshot(`${Cypress.spec.name}/2-email não preenchido`)

})