
describe("Test suite", () => {
   it('Generaterandonemial.id', () => {
      cy.generateUUID().then((email) => {
         // Use the generated UUID as needed
         cy.log(`Generated UUID: ${email}`);

         cy.visit("https://app.hubspot.com/login");
         cy.get('[aria-label="Decline all"]').click();
         cy.get("#username").click().type(email);
         cy.get("#password").click().type("hbhr53523");
      })
   })
})

