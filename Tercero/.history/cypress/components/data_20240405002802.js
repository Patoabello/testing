 import { Faker } from '@faker-js/faker';

 const { faker } = require('@faker-js/faker');


 let firstName = faker.person.firstName();
 let lastName = faker.person.lastName();
 let email = faker.internet.email();
 let phone = faker.phone.number();

 let password = 'jugodepera';


export const data = {

 
    pagePpal() {
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
       cy.get('h1').should('be.visible');
       cy.get('h1').first().should('have.text', 'Register Account');
    },
    
    getFakeName:()=>{
      return firstName;
    },
    getFakeLastName:()=>{
      return lastName;
    }
   }