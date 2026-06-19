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
};

Cypress.Commands.add("clickRegister", () => {
  cy.get(".login__buttons").within(() => {
    cy.get('button[type="button"]').click();
  });
});

Cypress.Commands.add(
  "registerUser",
  (email, name, password, initialBalance = 0) => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('input[name="email"]').type(email, { force: true });
      cy.get('input[name="name"]').type(name, { force: true });
      cy.get('input[name="password"]').type(password, { force: true });
      cy.get('input[name="passwordConfirmation"]').type(password, {
        force: true,
      });
      if(initialBalance === 1000) cy.get("#toggleAddBalance").click({ force: true });
      cy.get('button[type="submit"]').click({ force: true });
    });
  },
);

Cypress.Commands.add("loginUser", (email, password) => {
  cy.get(".card__login").within(() => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
});

Cypress.Commands.add(
  "registerAndLoginNewUser",
  (email, name, password, initialBalance = 0) => {
    cy.registerUser(email, name, password, initialBalance);

    cy.get("#btnCloseModal").click();

    cy.loginUser(email, password);
  },
);
