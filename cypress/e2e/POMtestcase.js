import Login from "../POMimpl/loginpage.js";

describe('page object model implement', () => {

    // General approach
    it('test cases', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //  cy.get('input[name="username"]').type('Admin');
        cy.SetUserName(Admin);
        // cy.get('input[type="password"]').type('admin123');
        cy.SetPassword(admin123);
        cy.get('button[type="submit"]').type("click");
        cy.get('[class*="oxd-text oxd-text--h"]').should('have.text', 'Dashboard');
    })

    // using POM 
    it.only(' login page ', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new Login();
        ln.SetUserName('Admin');
        ln.SetPassword('admin123')
        ln.ClickSubmit();
        ln.Verifylogin();
    })
})
