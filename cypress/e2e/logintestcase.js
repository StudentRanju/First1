
import loginage from "./PageObjects/logincred.js";
describe('page object model implement', () => {
    // General approach
    it('test cases', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[type="password"]').type('admin123');
        cy.get('button[type="submit"]').type("click");
        cy.get('[class*="oxd-text oxd-text--h"]').should('have.text', 'Dashboard');
    })
    // using Page object Model
    it(' loginpage ', () => {
        loginage.Visit();
        loginage.SetUsername('Admin')
        loginage.SetPassword('admin123');
        loginage.ClickSubmit();
        loginage.VerifyLogin();
    })
})
