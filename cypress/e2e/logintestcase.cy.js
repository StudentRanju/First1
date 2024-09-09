
  /// <reference types="Cypress"/>
import LoginPage from  "./PageObjects/logincred.cy.js";
 
describe('page object model implement', () => {
  //  const lp = new LoginPage();
    // // General approach
    // it('test cases', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.get('input[name="username"]').type('Admin');
    //     cy.get('input[type="password"]').type('admin123');
    //     cy.get('button[type="submit"]').type("click");
    //     cy.get('[class*="oxd-text oxd-text--h"]').should('have.text', 'Dashboard');
    // })
    // using Page object Model
    it(' loginpage ', () => {
        LoginPage.Visit();
        LoginPage.SetUsername('Admin')
        LoginPage.SetPassword('admin123');
        LoginPage.ClickSubmit();
        LoginPage.VerifyLogin();
    })
})
