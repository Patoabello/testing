 import { Faker } from '@faker-js/faker';

 const { faker } = require('@faker-js/faker');


 let firstname = faker.person.firstName();
 let lastname = faker.person.lastName();
 let email = faker.internet.email();
 let phone = faker.phone.number();


export const data = {

 
    pagePpal() {
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
       cy.get('h1').should('be.visible');
       cy.get('h1').first().should('have.text', 'Register Account');
    },
    
    getFakeName:()=>{
      return firstname;
    }
   }