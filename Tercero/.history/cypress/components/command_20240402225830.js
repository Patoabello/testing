

export const component = {

    login(){
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register').should('be.visible');
       
    }
 }