describe('my test suite', () => {
    it('test with multiple users', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('datas').then((users) => {
            users.forEach((user, index) => {
                cy.get('input[name="username"]').clear().type(user.username);
                cy.get('input[type="password"]').clear().type(user.password);
                cy.get('button[type="submit"]').click();

                cy.get('[class*="oxd-text oxd-text--h6 oxd-topbar"]').should('have.text', user.expected);
                // Go back to login page for the next user.
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            });
        });
    });
});
