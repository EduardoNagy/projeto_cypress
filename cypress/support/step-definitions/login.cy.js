//import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('acesso login para criar nova conta', () => {
    cy.acessarLogin()
})