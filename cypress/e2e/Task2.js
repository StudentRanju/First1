describe('task', () => {
    it('test1', () => {
        cy.visit('https://app.hubspot.com/login');
        cy.contains('Decline all').click();
        cy.contains('Sign up').click();
        cy.get('div[class*="TextInputstyles__InputStyles-sc"]').type('mdjfdj@gmail.com');
        //cy.contains('[class*="private-loading-button__content private"]').click();
        // cy.get('[label="views.LANDING_PAGE.buttonLabel"]').click();
        // cy.contains('Verify email').click();
        cy.visit('https://www.flipkart.com/');
    })
    it('testing for flipkart', () => {
        cy.visit('https://www.flipkart.com/');

    })

}
)