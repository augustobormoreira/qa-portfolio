// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This command will register a user

const inputName = {
  email: 0,
  name: 1,
  password: 2,
  confirmPassword: 3,
}

Cypress.Commands.add('clickRegister', () => {
  cy.get('.login__buttons').within(() => {
    cy.get('button[type="button"]').click()
  })
})

Cypress.Commands.add('registerUser', (email, name, password) => {
  cy.clickRegister();
  cy.get('.card__register').within(() => {
    cy.get('input[name="email"]').type(email, { force: true })
    cy.get('input[name="name"]').type(name, { force: true })
    cy.get('input[name="password"]').type(password, { force: true })
    cy.get('input[name="passwordConfirmation"]').type(password, { force: true })
    cy.get('button[type="submit"]').click({ force: true })
  })
})

Cypress.Commands.add('getInput', (name) => {
  cy.clickRegister();
  cy.get('.card__register').within(() => {
        cy.get('button[type="submit"]').click({force: true})
        return cy.get('.input__warging').eq(inputName[name]);
    })
})