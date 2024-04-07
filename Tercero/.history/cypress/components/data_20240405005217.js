 import { Faker } from '@faker-js/faker';

 const { faker } = require('@faker-js/faker');


 let mail = 'applytesters@mydomain.com';
 let passw = 'Apply123!!!';
 
 let password = 'jugodepera';


export const data = {

 
    pagePpal() {
       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
       //cy.get('h1').should('be.visible');
       //cy.get('h1').first().should('have.text', 'Register Account');
    },
    
    getMail:()=>{
      return mail;
    },
    getPasword:()=>{
      return passw;
    }
   }