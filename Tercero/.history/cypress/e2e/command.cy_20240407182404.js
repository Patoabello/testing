
import { data } from "../components/data";

let mail = 'applytesters@mydomain.com';
let passw = 'Apply123!!!';
let findProduct = 'Macbook';


describe('template spec', () => {

  beforeEach(function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
  });

  it('passes', () => {
    
    cy.prueba(mail, passw);
    cy.search(findProduct);
    cy.logout();

  

  })
})