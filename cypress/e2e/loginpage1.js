// page object class 
class loginpage {
    SetUserName(username)  // method
    {
        cy.get('input[name="username"]').type(username);
    }
    SetPassword(password) {
        cy.get('input[type="password"]').type(password);
    }
    ClickSubmit() {
        cy.get('button[type="submit"]').type("click");
    }
    Verifylogin() {
        cy.get('[class*="oxd-text oxd-text--h"]').should('have.text', 'Dashboard');
    }
}
export default loginpage