

export const data = {

    pagePpal() {
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
       cy.get('h1').should('be.visible');
       cy.get('h1').first().should('have.text', 'Register Account');
       
    },
   }