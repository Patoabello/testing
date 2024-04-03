


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    cy.get('h1').should('be.visible');
    cy.get('h1').first().should('have.text', 'Register Account');

    cy.login('uno', 'dos', 'pato@apply.com', '99865774')
  

  })
})