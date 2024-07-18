// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//import './support/commands';
import { v4 as uuidv4 } from 'uuid';

Cypress.Commands.add('generatePhoneNumber', () => {
    const phoneNumber = `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
    // const phoneNumber = `1+${uuidv4()}.slice(0,10)}`; 
     return phoneNumber;
});



Cypress.Commands.add('generateUUID', () => {
  //const email = 'cypress+'+uuidv4()+'@email.com'
  //2nd approach 
   const email = `cypress+${uuidv4()}@email.com` ;    // Tild is used
    return email;
});

