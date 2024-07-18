describe('Phone number generation', () => {
  it('generates a phone number using custom command', () => {
    // Call the custom command to generate a phone number
    cy.generatePhoneNumber().then((phoneNumber) => {
      // Example: use the generated phone number in Cypress command
      cy.visit("https://app.hubspot.com/login");

      cy.get('[aria-label="Decline all"]').click();

      cy.get("#username").click().type(phoneNumber);
      // Additional test steps using the generated phone number
    });
  });
});