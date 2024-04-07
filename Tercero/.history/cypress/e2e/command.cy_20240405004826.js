
import { data } from "../components/data";




describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    data.pagePpal()
    cy.login(data.getMail, data.getPasword)
  

  })
})