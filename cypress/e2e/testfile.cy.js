//// <reference types="Cypress" />
import webPage from './PageObjects/pageobjectclass.cy.js'; 
describe('page object model implement', () => {
    it('test cases', () => {
        webPage.visited();
        webPage.username();
        webPage.password();
        webPage.submit();
        webPage.Assertion();
    })
})