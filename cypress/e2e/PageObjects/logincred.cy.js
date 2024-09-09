 // page object class
 ///<reference types="Cypress"/>
    export class LoginPage {
        // constructor() {
        // }
    Visit(visit)
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    SetUsername(username) // method
    {
        cy.get('input[name="username"]').type(username);
    }
    SetPassword(password) {
        cy.get('input[type="password"]').type(password);
    }
    ClickSubmit() {
        cy.get('button[type="submit"]').click();
    }
    VerifyLogin() {
        cy.get('[class*="oxd-text oxd-text--h"]').should('have.text', 'Dashboard');
    }
}
export default new LoginPage();
