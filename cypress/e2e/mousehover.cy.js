
describe(' test suite', () => {
    it(" Mouse hover", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('div.mouse-hover-content').invoke('show')
        //cy.contains('Top').click();
        cy.contains('Top').click({ force: true });
        cy.url().should('include', 'top');
    })
    it(" Mouse hover", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    })
})