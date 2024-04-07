
import { data } from "../components/data";

let mail = 'applytesters@mydomain.com';
let passw = 'Apply123!!!';


describe('template spec', () => {
  it('passes', () => {
   
    data.pagePpal();
    cy.prueba(mail, passw)
    

  

  })
})