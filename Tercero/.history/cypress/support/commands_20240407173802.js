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

/*
Cypress.Commands.add('login', (m, p) => {  
    cy.get('#input-email').type(m);
    cy.get('#input-password').type(p);
    cy.get('input[type="submit"].btn.btn-primary').click();
});

*/

Cypress.Commands.add('prueba', (user, pass) => {
    cy.get('#input-email').type(user);
    cy.get('#input-password').type(pass);
    cy.get('input[type="submit"].btn.btn-primary').click();

});

Cypress.Commands.add('search',(find) => {
    cy.get('input[name="search"]').type(find);
    cy.get('.btn-btn-default-btn-lg').click();
})
 