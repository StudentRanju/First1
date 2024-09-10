describe('Select Flights', () => {
    it("Select flight fom dynamic dropdown", () => {
        cy.visit('www.cleartrip.com/');
        cy.get('[class=" c-pointer c-neutral-900"]').click();
        cy.get('[placeholder="Where from?"]').click().type('New Delhi');
        cy.contains('.airportList', 'New Delhi, IN - Indira Gandhi Airport (DEL)').click();
        cy.get('[placeholder="Where from?"]').should('have.value', 'DEL - New Delhi, IN');
        cy.get('[class="fw-600 fs-4 lh-2 flex flex-middle"]').click();
        cy.get('[placeholder="Where to?"]').click().type('dbr');
        cy.contains('.airportList', 'Darbhanga, IN - Darbhanga Airport (DBR)').click();
        cy.get('[placeholder="Where to?"]').should('have.value', 'DBR - Darbhanga, IN');
        cy.get('[class="fw-600 fs-4 lh-2 flex flex-middle"]').click();
    })

})







