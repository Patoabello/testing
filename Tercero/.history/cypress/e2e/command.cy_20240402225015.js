import { component } from "../components/command"


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    
    component.login();
  })
})