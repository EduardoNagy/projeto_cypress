const BTN_SUBMIT_ACCOUNT = '#submitAccount'

const RADIO_GENDER1 = '#id_gender1'
const RADIO_GENDER2 = '#id_gender2'
const FIRSTNAME='#customer_firstname'
const LASTNAME='#customer_lastname'
const INPUT_EMAIL = '#email' 
const SENHA = '#passwd'
const BIRTH_DAY = '#days'
const BIRTH_MONTH = '#months'
const BIRTH_YEAR = '#years'
const CHK_NEWSLETTER='#newsletter'

Cypress.Commands.add('preencherCadastro', () => {
    var faker = require ('faker-br')
    let meuFirstName = faker.name.firstName();
    let meuLastName = faker.name.lastName();

    cy.get(RADIO_GENDER1).click()
    cy.get(FIRSTNAME).type(meuFirstName)
    cy.get(LASTNAME).type(meuLastName)
    cy.get(SENHA).type('12345', {log: false})
    cy.get('select[name="days"]').select('1')
    cy.get('select[name="months"]').select('11')
    cy.wait(4000)
    cy.get('select[name="years"]').select('1990')
    cy.get(CHK_NEWSLETTER).click()
    cy.get(BTN_SUBMIT_ACCOUNT).should('be.visible')
        
    cy.screenshot(`${Cypress.spec.name}/3-dados pessoais preenchidos`)
})