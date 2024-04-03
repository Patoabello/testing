

export const component = {

    login(){
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
       cy.window().its('document').invoke('readyState').should('eq', 'complete');
    }
 }