describe(' Handling child tab', () => {
    it('test cases', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // invoke is function here 
        cy.get('[class="btn-style class1 class2"]').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ');
        })
    })
})
