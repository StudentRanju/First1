describe('Test suite', () => {
    it('handle multiple tabs', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#opentab').should('have.attr', 'href')
            .and('include', '/courses');
    })
    it('should visit in the new tabs, removing target attribute', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#opentab').invoke('removeAttr', 'target').click(); // new tab into the same window
        cy.url().should('include', '/courses');
        cy.get('[class*="form-control find-input"]').type('selenium');
        cy.get('[class*="find-course search-course"]').click();
    })
    it.only('should visit in the new tab without , removing target attribute', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#opentab').then(newTab => {
            const hreftab = newTab.prop('href')
            cy.visit(hreftab)
            cy.url().should('include', '/courses');
            cy.get('[class*="form-control find-input"]').type('selenium');
            cy.get('[class*="find-course search-course"]').click();
        })
        cy.go('back');
    })
    it.only('for other link', () => {
        cy.visit('https://www.qaclickacademy.com');
    })
})