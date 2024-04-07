
import { data } from "../components/data";




describe('template spec', () => {
  it('passes', () => {
   
    data.pagePpal();
    cy.login('data.getMail', 'data.getPasword');
  

  })
})